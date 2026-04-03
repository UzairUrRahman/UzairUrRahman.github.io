import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { docs } from "../utils/docsIndex";

export default function Docs() {
  const { slug } = useParams();
  const activeSlug = slug || docs[0].slug;
  const doc = docs.find(d => d.slug === activeSlug);

  if (!doc) return <div>Document not found</div>;

  // PDF VIEW
  if (doc.slug.endsWith(".pdf")) {
    return (
      <div className="markdown">
        <a
          href={`${import.meta.env.BASE_URL}docs/${doc.slug}`}
          download
          style={{ display: "block", marginBottom: 10 }}
        >
          Download PDF
        </a>

        <iframe
          src={`${import.meta.env.BASE_URL}docs/${doc.slug}`}
          width="100%"
          height="800px"
        />
      </div>
    );
  }

  return (
    <div className="markdown">
      <ReactMarkdown
        components={{
          code({ inline, className, children }) {
            const match = /language-(\w+)/.exec(className || "");

            if (!inline && match) {
              const codeText = String(children).replace(/\n$/, "");

              return (
                <div style={{ position: "relative" }}>
                  {/* ✅ COPY BUTTON */}
                  <button
                    // onClick={() => {
                    //   navigator.clipboard.writeText(codeText);
                    // }}
                    onClick={() => {
  navigator.clipboard.writeText(codeText);
  alert("Copied!");
}}
                    style={{
                      position: "absolute",
                      right: 10,
                      top: 10,
                      fontSize: 12,
                      background: "#111",
                      color: "#fff",
                      border: "none",
                      padding: "4px 8px",
                      borderRadius: 6,
                      cursor: "pointer"
                    }}
                  >
                    Copy
                  </button>

                  {/* ✅ CODE BLOCK */}
                  <SyntaxHighlighter
                    style={oneDark}
                    language={match[1]}
                  >
                    {codeText}
                  </SyntaxHighlighter>
                </div>
              );
            }

            return <code>{children}</code>;
          }
        }}
      >
        {doc.content}
      </ReactMarkdown>
    </div>
  );
}