import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import { StatsCard } from "./stats-card";

function App() {
  return (
    <main className="page">
      <StatsCard />
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
