import { useRef } from "react";
import "../styles/projects.css";
import githubLogo from "../assets/github-light.svg";
import linkLogo from "../assets/link.svg";
import ordinacija from "../assets/ordinacija-stosic.png";
import quotes from "../assets/quotes-app.png";
import rickAndMorty from "../assets/rick-and-morty.png";
import tango from "../assets/tango.png";
import useScrollAnimation from "../hooks/useScrollAnimation";

function Projects() {
  const projectRef = useRef(null);
  useScrollAnimation(projectRef);

  return (
    <section className="container" id="projects">
      <h2 className="subtitle">
        What I've Built
        <div className="underline"></div>
      </h2>
      <p className="section-info">Some of the projects I've built</p>
      <div className="projects" ref={projectRef}>
        {/* Quotes App */}
        <div className="project">
          <div className="project-content">
            <div className="project-pic">
              <img src={quotes} alt="" />
            </div>
            <h4 className="project-title">Quotes App</h4>
            <p className="project-description">
              A web application that allows users to browse, filter, and manage
              a collection of quotes. The app provides an easy-to-use interface
              to interact with quotes, vote on them, and organize them by
              various criteria.
            </p>
          </div>
          <div className="project-footer">
            <div className="project-stack">
              <p className="project-tag">JavaScript</p>
              <p className="project-tag">React.js</p>
              <p className="project-tag">CSS</p>
              <p className="project-tag">Postman</p>
            </div>
            <div className="project-actions">
              <div className="project-actions-item">
                <div className="project-actions-logo">
                  <img src={githubLogo} alt="" />
                </div>
                <a
                  href="https://github.com/Vukasin-Stosic/quotes-react"
                  target="blank"
                  className="project-actions-link"
                >
                  Source code
                </a>
              </div>
              <div className="project-actions-item">
                <div className="project-actions-logo">
                  <img src={linkLogo} alt="" />
                </div>
                <a
                  href="https://quotes-vukasin.netlify.app/"
                  target="blank"
                  className="project-actions-link"
                >
                  Website
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Quotes App */}
        {/* Ordinacija Stosic */}
        <div className="project">
          <div className="project-content">
            <div className="project-pic">
              <img src={ordinacija} alt="" />
            </div>
            <h4 className="project-title">Ordinacija Stošić</h4>
            <p className="project-description">
              A personal project for a dental office website, developed from
              scratch.
            </p>
          </div>
          <div className="project-footer">
            <div className="project-stack">
              <p className="project-tag">JavaScript</p>
              <p className="project-tag">React.js</p>
              <p className="project-tag">CSS</p>
            </div>
            <div className="project-actions">
              <div className="project-actions-item">
                <div className="project-actions-logo">
                  <img src={githubLogo} alt="" />
                </div>
                <a
                  href="https://github.com/Vukasin-Stosic/ordinacija-stosic"
                  target="blank"
                  className="project-actions-link"
                >
                  Source code
                </a>
              </div>
              <div className="project-actions-item">
                <div className="project-actions-logo">
                  <img src={linkLogo} alt="" />
                </div>
                <a
                  href="https://ordinacija-stosic.netlify.app/"
                  target="blank"
                  className="project-actions-link"
                >
                  Website
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Ordinacija Stosic */}
        {/* Rick and Morty App */}
        <div className="project">
          <div className="project-content">
            <div className="project-pic">
              <img src={rickAndMorty} alt="" />
            </div>
            <h4 className="project-title">Rick and Morty App</h4>
            <p className="project-description">
              An application that lists characters from the Rick and Morty
              series, featuring character search and pagination.
            </p>
          </div>
          <div className="project-footer">
            <div className="project-stack">
              <p className="project-tag">React.js</p>
              <p className="project-tag">CSS</p>
              <p className="project-tag">RestAPI</p>
            </div>
            <div className="project-actions">
              <div className="project-actions-item">
                <div className="project-actions-logo">
                  <img src={githubLogo} alt="" />
                </div>
                <a
                  href="https://github.com/Vukasin-Stosic/Rick-and-morty"
                  target="blank"
                  className="project-actions-link"
                >
                  Source code
                </a>
              </div>
              <div className="project-actions-item">
                <div className="project-actions-logo">
                  <img src={linkLogo} alt="" />
                </div>
                <a
                  href="https://rickandmortyvs.netlify.app/"
                  target="blank"
                  className="project-actions-link"
                >
                  Website
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Rick and Morty App */}
        {/* Binary Puzzle */}
        <div className="project">
          <div className="project-content">
            <div className="project-pic">
              <img src={tango} alt="" />
            </div>
            <h4 className="project-title">Binary Puzzle</h4>
            <p className="project-description">
              A fun and challenging puzzle game built in vanila JavaScript. The
              binary puzzle is a captivating and logical game that challenges
              players to solve it through pure reasoning. Ir ia inspired by the
              LinkedIn game "Tango."
            </p>
          </div>
          <div className="project-footer">
            <div className="project-stack">
              <p className="project-tag">JavaScript</p>
              <p className="project-tag">CSS</p>
              <p className="project-tag">Bootstrap</p>
            </div>
            <div className="project-actions">
              <div className="project-actions-item">
                <div className="project-actions-logo">
                  <img src={githubLogo} alt="" />
                </div>
                <a
                  href="https://github.com/Vukasin-Stosic/tango"
                  target="blank"
                  className="project-actions-link"
                >
                  Source code
                </a>
              </div>
              <div className="project-actions-item">
                <div className="project-actions-logo">
                  <img src={linkLogo} alt="" />
                </div>
                <a
                  href="https://tango-puzzle.netlify.app/"
                  target="blank"
                  className="project-actions-link"
                >
                  Website
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Binary Puzzle */}
      </div>
    </section>
  );
}

export default Projects;
