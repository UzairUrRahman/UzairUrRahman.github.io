// import { Link } from "react-router-dom";
// import { docs } from "../utils/docsIndex";

// export default function Sidebar() {
//   return (
//     <div style={{ width: 260, padding: 20, borderRight: "1px solid #ddd" }}>
//       <h3>Tutorials</h3>

//       {docs.map(doc => (
//         <div key={doc.slug} style={{ marginBottom: 20 }}>
//           <Link to={`/docs/${doc.slug}`}>{doc.title}</Link>
//         </div>
//       ))}
//     </div>
//   );
// }



// import { NavLink } from "react-router-dom";
// import { docs } from "../utils/docsIndex";

// export default function Sidebar() {
//   return (
//     <aside style={styles.sidebar}>
//       {docs.map(doc => (
//         <NavLink
//           key={doc.slug}
//           to={`/docs/${doc.slug}`}
//           style={({ isActive }) => ({
//             ...styles.link,
//             ...(isActive ? styles.active : {})
//           })}
//         >
//           {doc.title}
//         </NavLink>
//       ))}
//     </aside>
//   );
// }

// const styles = {
//   sidebar: {
//     width: 260,
//     padding: "1rem",
//     borderRight: "1px solid #e5e7eb"
//   },
//   link: {
//     display: "block",
//     padding: "1em 1rem",
//     borderRadius: 8,
//     textDecoration: "none",
//     color: "#374151",
//     fontWeight: 500,
//     borderBottom: "1px solid #ccc"
//   },
//   active: {
//     background: "#eef2ff",
//     color: "#4338ca",
//     fontWeight: 600
//   }
// };




import { NavLink } from "react-router-dom";
import { docs } from "../utils/docsIndex";



export default function Sidebar() {
  return (
    <aside style={styles.sidebar}>
      
      {docs.map(doc => (
        <NavLink
          key={doc.slug}
          to={`/docs/${doc.slug}`}
          style={({ isActive }) => ({
            ...styles.link,
            ...(isActive ? styles.active : {})
          })}
        >
          {doc.title}
        </NavLink>
      ))}
    </aside>
    
  );
}

const styles = {
  // sidebar: {
  //   // width: 260,
  //   // padding: "1rem",
  //   // background: "var(--sidebar-bg)",
  //   // borderRight: "1px solid #e5e7eb"
    
  // },
  sidebar: {
  width: 260,
  padding: "1rem",
  background: "var(--sidebar-bg)",
  borderRight: "1px solid #e5e7eb",
  position: "fixed",
  top: 0,
  left: 0,
  height: "100vh",
  overflowY: "auto",
  overflowX: "hidden"
},
content: {
  marginLeft: 260,
  flex: 1,
  overflowY: "auto",
  padding: "2rem"
},
  // link: {
  //   display: "block",
  //   padding: "1rem 1rem",
  //   borderRadius: 8,
  //   textDecoration: "none",
  //   color: "var(--text)",
  //   marginBottom: 4,
  //   borderBottom: "1px solid #ccc"

  // },
  // active: {
  //   background: "var(--active-bg)",
  //   color: "var(--active-text)",
  //   fontWeight: 600
  // }

  link: {
  display: "block",
  padding: "0.6rem 0.75rem",
  borderRadius: 8,
  textDecoration: "none",
  color: "var(--text)",
  marginBottom: 4,
  transition: "all 0.2s ease",
  borderBottom: "1px solid #ccc"

},
active: {
  background: "var(--active-bg)",
  color: "var(--active-text)",
  fontWeight: 600,
  transform: "translateX(4px)"
}
};
