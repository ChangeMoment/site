
  import { createRoot, hydrateRoot } from "react-dom/client";
  import App from "./app/App";
  import "./styles/index.css";

  const root = document.getElementById("root")!;
  const hasStaticBlogFallback = root.querySelector("[data-static-blog-fallback]") !== null;
  if (root.hasChildNodes() && !hasStaticBlogFallback) {
    hydrateRoot(root, <App />);
  } else {
    createRoot(root).render(<App />);
  }
  
