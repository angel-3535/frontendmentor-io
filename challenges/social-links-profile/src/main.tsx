import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import avatarImage from "./assets/avatar-jessica.jpeg";
import "./styles.css";

const links = ["GitHub", "Frontend Mentor", "LinkedIn", "Twitter", "Instagram"];

function App() {
  return (
    <main className="page">
      <article className="profile-card">
        <img className="profile-card__avatar" src={avatarImage} alt="Jessica Randall" />
        <h1 className="profile-card__name">Jessica Randall</h1>
        <p className="profile-card__location">London, United Kingdom</p>
        <p className="profile-card__bio">"Front-end developer and avid reader."</p>

        <div className="profile-card__links">
          {links.map((link) => (
            <a className="profile-card__link" href="#" key={link}>
              {link}
            </a>
          ))}
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
