import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import { ProductReviewCard } from "./product-review-card";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <main className="page">
      <ProductReviewCard />
      <footer className="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge">
          Frontend Mentor
        </a>
        . Coded by <a href="#">Your Name Here</a>.
      </footer>
    </main>
  </StrictMode>,
);
