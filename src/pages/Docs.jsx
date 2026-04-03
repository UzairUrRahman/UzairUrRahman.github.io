// src/components/Docs.jsx
import { useParams, Link } from "react-router-dom";
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
    <div className="docs-container" style={{ display: "flex" }}>
      {/* Sidebar */}
      <div className="side-menu" style={{ width: 200, marginRight: 20, height: "80vh", overflowY: "scroll" }}>
        {docs.map(d => (
          <div key={d.slug} style={{ margin: 5 }}>
            <Link
              to={`/docs/${d.slug}`}
              style={{
                textDecoration: "none",
                color: d.slug === activeSlug ? "blue" : "black",
                fontWeight: d.slug === activeSlug ? "bold" : "normal"
              }}
            >
              {d.title}
            </Link>
          </div>
        ))}
      </div>

      {/* Markdown content */}
      <div className="markdown" style={{ flex: 1 }}>
        <ReactMarkdown
          components={{
            code({ inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || "");
              if (!inline && match) {
                const codeText = children
                  .map(c => (typeof c === "string" ? c : ""))
                  .join("");

                return (
                  <div style={{ position: "relative" }}>
                    <button
                      onClick={() => {
                        navigator.clipboard.writeText(codeText)
                          .then(() => alert("Copied!"))
                          .catch(() => alert("Copy failed"));
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
                        cursor: "pointer",
                        zIndex: 10
                      }}
                    >
                      Copy
                    </button>

                    <SyntaxHighlighter
                      style={oneDark}
                      language={match[1]}
                      PreTag="div"
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
    </div>
  );
}