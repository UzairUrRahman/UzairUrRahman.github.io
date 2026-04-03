import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Docs from "./pages/Docs";
import { docs } from "./utils/docsIndex";
import "./styles/markdown.css";
// import { ThemeProvider, useTheme } from "./context/ThemeContext";

// function ThemeToggleButton() {
//   const { theme, toggleTheme } = useTheme();
//   return (
//     <button
//       onClick={toggleTheme}
//       style={{
//         position: "fixed",
//         top: 10,
//         right: 10,
//         padding: "6px 12px",
        // borderRadius: 6,
//         border: "none",
//         cursor: "pointer",
//         background: theme === "light" ? "#111" : "#fff",
//         color: theme === "light" ? "#fff" : "#111"
//       }}
//     >
//       {theme === "light" ? "Dark Mode" : "Light Mode"}
//     </button>
    
//   );
// }

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
  // <ThemeProvider>
  //     <Router>
  //       <ThemeToggleButton />
  //       <Routes>
  //         <Route path="/docs/:slug" element={<Docs />} />
  //         <Route path="/docs" element={<Docs />} />
  //       </Routes>
  //     </Router>
  //   </ThemeProvider>
}