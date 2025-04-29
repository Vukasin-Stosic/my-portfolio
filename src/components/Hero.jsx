import "../styles/hero.css";
import profilePicture from "../assets/vs.png";

function Hero() {
  return (
    <section className="hero container">
      <div className="hero-content">
        <h3 className="hero-subtitle">//Hello world. I am</h3>
        <h1 className="hero-title">Vukašin Stošić</h1>
        <p className="hero-text">
          <span className="accent">Web developer </span>
          focused on creating responsive, efficient, and engaging web apps.
        </p>
      </div>
      <div className="profile-picture">
        <img src={profilePicture} alt="" />
      </div>
      <div className="shape"></div>
    </section>
  );
}

export default Hero;
