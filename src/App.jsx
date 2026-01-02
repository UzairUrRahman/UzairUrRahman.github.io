import { useState } from "react";
import ReactMarkdown from "react-markdown";

const guides = [
  { title: "Apache Setup", file: "/guides/apache.md" },
];

export default function App() {
  const [content, setContent] = useState("Select a guide from the sidebar");

  async function loadGuide(file) {
    const res = await fetch(file);
    const text = await res.text();
    setContent(text);
  }

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <aside
        style={{
          width: 260,
          padding: 16,
          borderRight: "1px solid #ddd",
        }}
      >
        <h3>Guides</h3>
        {guides.map((g) => (
          <div key={g.file} style={{ marginBottom: 8 }}>
            <button onClick={() => loadGuide(g.file)}>
              {g.title}
            </button>
          </div>
        ))}
      </aside>

      <main style={{ padding: 24, overflow: "auto" }}>
        <ReactMarkdown>{content}</ReactMarkdown>
      </main>
    </div>
  );
}
