import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import { Nft } from "./nft";

function App() {
  return (
    <main className="page">
      <Nft />

      <footer className="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge">
          Frontend Mentor
        </a>
        . Coded by <a href="#">Your Name Here</a>.
      </footer>
    </main>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
