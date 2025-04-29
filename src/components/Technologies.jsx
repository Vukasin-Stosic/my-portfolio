import { useRef } from "react";
import "../styles//technologies.css";
import htmlLogo from "../assets/html.svg";
import cssLogo from "../assets/css.svg";
import jsLogo from "../assets/javascript.svg";
import reactLogo from "../assets/react.svg";
import sassLogo from "../assets/sass.svg";
import bootstrapLogo from "../assets/bootstrap.svg";
import figmaLogo from "../assets/figma.svg";
import firebaseLogo from "../assets/firebase.svg";
import gitLogo from "../assets/git.svg";
import githubLogo from "../assets/github.svg";
import phpLogo from "../assets/php.svg";
import mysqlLogo from "../assets/mysql.svg";
import useScrollAnimation from "../hooks/useScrollAnimation";

function Technologies() {
  const technologiesRef = useRef(null);
  useScrollAnimation(technologiesRef);

  return (
    <section className="container background" id="technologies">
      <h2 className="subtitle">
        Tools I Use
        <div className="underline"></div>
      </h2>
      {/* <p className="section-info">Technologies and tools I work with</p> */}
      <div className="technologies-wrapper" ref={technologiesRef}>
        <div className="technologies-item">
          <img src={htmlLogo} alt="" />
          <p>HTML</p>
        </div>
        <div className="technologies-item">
          <img src={cssLogo} alt="" />
          <p>CSS</p>
        </div>
        <div className="technologies-item">
          <img src={jsLogo} alt="" />
          <p>JavaScript</p>
        </div>
        <div className="technologies-item">
          <img src={reactLogo} alt="" />
          <p>React.js</p>
        </div>
        <div className="technologies-item">
          <img src={sassLogo} alt="" />
          <p>Sass</p>
        </div>
        <div className="technologies-item">
          <img src={bootstrapLogo} alt="" />
          <p>Bootstrap</p>
        </div>
        <div className="technologies-item">
          <img src={phpLogo} alt="" />
          <p>PHP</p>
        </div>
        <div className="technologies-item">
          <img src={mysqlLogo} alt="" />
          <p>MySQL</p>
        </div>
        <div className="technologies-item">
          <img src={figmaLogo} alt="" />
          <p>Figma</p>
        </div>
        <div className="technologies-item">
          <img src={firebaseLogo} alt="" />
          <p>Firebase</p>
        </div>
        <div className="technologies-item">
          <img src={gitLogo} alt="" />
          <p>Git</p>
        </div>
        <div className="technologies-item">
          <img src={githubLogo} alt="" />
          <p>GitHub</p>
        </div>
      </div>
    </section>
  );
}

export default Technologies;
