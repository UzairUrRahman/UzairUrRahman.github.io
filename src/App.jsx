import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Docs from "./pages/Docs";
import { docs } from "./utils/docsIndex";
import "./styles/markdown.css";


export default function App() {
  const styles = {
  content: {
    flex: 1,
    overflowY: "auto",
    padding: "2rem"
  }
};
  return (
    
    <HashRouter>
      {/* <div style={{ display: "flex", minHeight: "100vh" }}>
        <Sidebar />
        <Routes>
          <Route
            path="/"
            element={<Navigate to={`/docs/${docs[0].slug}`} />}
          />
          <Route path="/docs/:slug" element={<Docs />} />
        </Routes>
      </div> */}
      <div style={{ display: "flex", height: "100vh" }}>
  <Sidebar />


  <div style={styles.content}>
    <Routes>
      {/* <Route path="/" element={<Navigate to={`/docs/${docs[0].slug}`} />} /> */}
      <Route path="/docs/:slug" element={<Docs />} />
      <Route path="/" element={<Docs />} />
    </Routes>
  </div>
</div>
    </HashRouter>
  );
}