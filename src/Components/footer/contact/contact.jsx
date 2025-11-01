import React from "react";
import { Mail, Globe, Github, Linkedin } from "lucide-react";
import "./contact.css";

export default function ContactSection() {
  return (
    <section className="contact-section">
      <h1 className="title">NEED FULLSTACK DEVELOPER</h1>
      <p className="subtitle">
        If you're interested in working together, this is how you can reach me —
        let's build something amazing together.
      </p>

      <a
        href="mailto:elmoussaouiwalid05@gmail.com"
        className="contact-button"
      >
        Get in touch <Mail className="icon" />
      </a>

      <div className="social-links">
        <a
          href="https://www.linkedin.com/in/walid-el-moussaoui-502625387/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Linkedin className="icon" />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <Globe className="icon" />
        </a>
        <a
          href="https://github.com/walid-elmoussaoui"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github className="icon" />
        </a>
      </div>

      <p className="footer">( Made with ❤️ by Walid El Moussaoui )</p>
    </section>
  );
}
