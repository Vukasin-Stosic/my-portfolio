import { useState, useEffect, useRef } from "react";
import "../styles/contact.css";
import emailLogo from "../assets/email.svg";
import githubLogo from "../assets/github-light.svg";
import linkedinLogo from "../assets/linkedin.svg";
import downloadLogo from "../assets/download.svg";
import resume from "../assets/vukasin-stosic-cv.pdf";

function Contact() {
  const [copied, setCopied] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const email = "vukasinstosic@gmail.com";
  const emailRef = useRef(null);
  const isMobile = /Mobi|Android/i.test(navigator.userAgent);

  useEffect(() => {
    if (isMobile && emailRef.current) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setShowTooltip(true);
            setTimeout(() => setShowTooltip(false), 2000);
          }
        },
        { threshold: 0.5 }
      );

      observer.observe(emailRef.current);
      return () => observer.disconnect();
    }
  }, [isMobile]);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      if (isMobile) {
        setShowTooltip(true);
        setTimeout(() => setShowTooltip(false), 1800);
      }
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy email: ", err);
    }
  }

  function handleHover() {
    showTooltip ? setShowTooltip(false) : setShowTooltip(true);
  }

  return (
    <section className="container" id="contact">
      <h2 className="subtitle">
        Get in Touch
        <div className="underline"></div>
      </h2>
      {/* <p className="section-info">Let's create something amazing together</p> */}
      <button
        ref={emailRef}
        onClick={handleCopy}
        onMouseEnter={handleHover}
        onMouseLeave={handleHover}
        className="click-to-copy"
      >
        {email}
        <span className={`popup ${showTooltip ? "popup-shown" : ""}`}>
          {copied ? "Copied to clipboard!" : "Click to copy to clipboard!"}
        </span>
      </button>
      <div className="contacts">
        <a href="mailto:vukasinstosic@gmail.com" className="contacts-item">
          <img src={emailLogo} alt="" className="contacts-item-logo" />
          Email
        </a>
        <a
          href="https://github.com/Vukasin-Stosic"
          className="contacts-item"
          target="blank"
        >
          <img src={githubLogo} alt="" className="contacts-item-logo" />
          GitHub
        </a>
        <a
          href="http://www.linkedin.com/in/vukašin-stošić-269b62160"
          className="contacts-item"
          target="blank"
        >
          <img src={linkedinLogo} alt="" className="contacts-item-logo" />
          Linkedin
        </a>
        <a href={resume} download className="contacts-item" target="blank">
          <img src={downloadLogo} alt="" className="contacts-item-logo" />
          Resume
        </a>
      </div>
    </section>
  );
}

export default Contact;
