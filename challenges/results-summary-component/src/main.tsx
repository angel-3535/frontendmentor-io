import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import { ResultSummary } from "./result-summary";

function App() {
  return (
    <main className="page">
      <ResultSummary />
    </main>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
