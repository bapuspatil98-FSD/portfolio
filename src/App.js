import React, { useEffect } from "react";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";

import {
  FaEnvelope, FaPhone, FaMapMarkerAlt,
  FaLinkedin, FaGithub,
  FaJava, FaReact, FaAngular, FaAws, FaDatabase
} from "react-icons/fa";

import { SiSpringboot, SiMysql } from "react-icons/si";
import { ReactTyped } from "react-typed";
function App() {

useEffect(() => {
  AOS.init({ duration: 800, once: true });

    // ✅ SOFT BACKGROUND EFFECT (FIXED)
   const move = (e) => {
  document.body.style.background = `
    radial-gradient(circle at ${e.clientX}px ${e.clientY}px, rgba(56,189,248,0.04), #020617 70%)
  `;
};

window.addEventListener("mousemove", move);

return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div className="app">

      {/* NAVBAR */}
      <nav className="navbar">
        <h2 className="logo">Bapu</h2>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-container single">

          <div className="hero-text" data-aos="fade-up">
            <h1>Hi, I'm <span>Bapu Sultane</span></h1>

            <p className="subtitle">
  <ReactTyped
    strings={[
      "Software Engineer",
      "Java Developer",
      "Spring Boot Expert",
      "Microservices Developer"
    ]}
    typeSpeed={60}
    backSpeed={40}
    loop
  />
</p>

            <p className="desc">
              Building scalable backend systems and enterprise applications.
            </p>

            <div className="buttons">
              <button className="primary">Hire Me</button>

              <a href="/resume.pdf" download className="secondary">
                Download Resume
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section" data-aos="fade-up">
        <h2>About Me</h2>
        <p>
          I am a Software Engineer with 3+ years of experience in building
          scalable backend systems using Java, Spring Boot, and Microservices.
        </p>
      </section>

      {/* SKILLS */}
      <section id="skills" className="section" data-aos="fade-up">
        <h2>Skills</h2>

        <div className="grid">
          {[
            "Java", "Spring Boot", "Microservices",
            "React", "Angular", "AWS", "MySQL"
          ].map((skill) => (
            <div className="card" key={skill}>{skill}</div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="section" data-aos="fade-up">
        <h2>Projects</h2>

        <div className="grid">

          <div className="project-card">
            <h3>ICICI HCM Platform</h3>
            <p>HR system for payroll, attendance & lifecycle management.</p>

            <div className="tech-icons">
              <span><FaJava /> Java</span>
              <span><SiSpringboot /> Spring</span>
              <span><FaReact /> React</span>
              <span><FaAws /> AWS</span>
              <span><SiMysql /> MySQL</span>
            </div>
          </div>

          <div className="project-card">
            <h3>Online Banking System</h3>
            <p>Secure banking system with transactions & authentication.</p>

            <div className="tech-icons">
              <span><FaJava /> Java</span>
              <span><SiSpringboot /> Spring</span>
              <span><FaAngular /> Angular</span>
              <span><FaAws /> AWS</span>
              <span><FaDatabase /> DB</span>
            </div>
          </div>

          <div className="project-card">
            <h3>Pipeline Management</h3>
            <p>System to track workflows and monitor pipelines.</p>

            <div className="tech-icons">
              <span><FaJava /> Java</span>
              <span><SiSpringboot /> Spring</span>
              <span><SiMysql /> MySQL</span>
            </div>
          </div>

        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section" data-aos="fade-up">
        <h2>Contact</h2>

        <div className="contact-grid">

          <a href="mailto:bapuspatil98@gmail.com" className="contact-card">
            <FaEnvelope className="icon" />
            <h3>Email</h3>
            <p>bapuspatil98@gmail.com</p>
          </a>

          <a href="tel:+917028754387" className="contact-card">
            <FaPhone className="icon" />
            <h3>Phone</h3>
            <p>+91 7028754387</p>
          </a>

          <div className="contact-card">
            <FaMapMarkerAlt className="icon" />
            <h3>Location</h3>
            <p>Pune, India</p>
          </div>

          <a
            href="https://www.linkedin.com/in/bapu-sultane-7965061a0/"
            target="_blank"
            rel="noreferrer"
            className="contact-card"
          >
            <FaLinkedin className="icon" />
            <h3>LinkedIn</h3>
            <p>View Profile</p>
          </a>

          <a
            href="https://github.com/bapuspatil98-FSD"
            target="_blank"
            rel="noreferrer"
            className="contact-card"
          >
            <FaGithub className="icon" />
            <h3>GitHub</h3>
            <p>View Projects</p>
          </a>

        </div>
      </section>

    </div>
  );
}

export default App;