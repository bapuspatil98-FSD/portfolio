import React from "react";
import "./App.css";
import profile from "./assets/profile.jpeg";
import { motion } from "framer-motion";

function App() {
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
        <div className="hero-container">

          {/* LEFT TEXT */}
          <motion.div
            className="hero-text"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h1>
              Hi, I'm <span>Bapu Patil</span>
            </h1>

            <p className="subtitle">
              Software Engineer | Java | Spring Boot | Microservices
            </p>

            <p className="desc">
              Building scalable backend systems and enterprise applications.
            </p>

            <div className="buttons">
              <button className="primary">Hire Me</button>
              <a href="/resume.pdf" download>
                <button className="secondary">Download Resume</button>
              </a>
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            className="hero-image"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <img src={profile} alt="profile" />
          </motion.div>

        </div>
      </section>

    </div>
  );
}

export default App;