import { useState } from "react";
import ReactMarkdown from "react-markdown";

const guides = [
  { title: "Apache Setup", file: "/guides/apache.md" },
  // Add more guides here
];

export default function App() {
  const [content, setContent] = useState("Select a guide");

  async function loadGuide(file) {
    const res = await fetch(file);
    setContent(await res.text());
  }

  return (
    <div style={{ display: "flex" }}>
      <aside style={{ width: 250, padding: 10, borderRight: "1px solid #ddd" }}>
        {guides.map(g => (
          <div key={g.file}>
            <button onClick={() => loadGuide(g.file)}>{g.title}</button>
          </div>
        ))}
      </aside>
      <main style={{ padding: 20 }}>
        <ReactMarkdown>{content}</ReactMarkdown>
      </main>
    </div>
  );
}
