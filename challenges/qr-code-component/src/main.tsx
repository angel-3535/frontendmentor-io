import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import qrCodeImage from "./assets/image-qr-code.png";
import "./styles.css";

function App() {
  return (
    <main className="page">
      <article className="card">
        <img
          className="card__image"
          src={qrCodeImage}
          alt="QR code linking to Frontend Mentor"
        />
        <div className="card__content">
          <h1 className="card__title">
            Improve your front-end skills by building projects
          </h1>
          <p className="card__description">
            Scan the QR code to visit Frontend Mentor and take your coding skills
            to the next level
          </p>
        </div>
      </article>
    </main>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
