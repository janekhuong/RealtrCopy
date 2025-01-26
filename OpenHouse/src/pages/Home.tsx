import "./home.css";
import { useNavigate } from "react-router-dom";
import house_icon from "../assets/realtr-logo.png";
import hero_house from "../assets/hero-house.png";

export default function Home() {
  const navigate = useNavigate();

  return (
    <>
      <body>
        <nav>
          <div className="logo-container">
            <img
              src={house_icon}
              onClick={() => {
                navigate("/");
              }}
              className="logo"
              alt="realtr-logo"
            />
          </div>
          <div className="button-container">
            <button
              className="button login-button"
              onClick={() => navigate("/signup")}
            >
              LOGIN
            </button>
            <button
              className="button signup-button"
              onClick={() => navigate("/signup")}
            >
              SIGN UP
            </button>
          </div>
        </nav>
        <section className="hero">
          <div className="hero-container">
            <div className="header-title">
              <h1>Home is where</h1>
              <h1>the heart is.</h1>
              <button
                onClick={() => navigate("/swipe")}
                className="find-match-button"
              >
                Find Your Match
              </button>
            </div>
            <div className="image-container">
              <img src={hero_house} alt="house" className="hero-image" />
            </div>
          </div>
        </section>
      </body>
    </>
  );
}