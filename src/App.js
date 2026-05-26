import React from "react";
import "./App.css";

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
        <div>
          <h1>
            Hi, I'm <span>Bapu Patil</span>
          </h1>
          <p>Java Developer | Spring Boot | Backend Developer</p>
          <div className="buttons">
            <button>Hire Me</button>
            <button className="outline">Download Resume</button>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section">
        <h2>About Me</h2>
        <p>
          I am a passionate Java Developer with 3+ years of experience building
          scalable backend systems using Spring Boot, REST APIs, and MySQL.
        </p>
      </section>

      {/* SKILLS */}
      <section id="skills" className="section">
        <h2>Skills</h2>

        <div className="skill">
          <p>Java</p>
          <div className="bar"><span style={{ width: "90%" }}></span></div>
        </div>

        <div className="skill">
          <p>Spring Boot</p>
          <div className="bar"><span style={{ width: "85%" }}></span></div>
        </div>

        <div className="skill">
          <p>REST API</p>
          <div className="bar"><span style={{ width: "85%" }}></span></div>
        </div>

        <div className="skill">
          <p>MySQL</p>
          <div className="bar"><span style={{ width: "80%" }}></span></div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="section">
        <h2>Projects</h2>

        <div className="projects">
          <div className="card">
            <h3>Job Automation Bot</h3>
            <p>Automated job applications using Selenium & Python.</p>
          </div>

          <div className="card">
            <h3>REST API System</h3>
            <p>Built secure backend APIs using Spring Boot.</p>
          </div>

          <div className="card">
            <h3>Employee Management</h3>
            <p>CRUD system with authentication & role-based access.</p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section">
        <h2>Contact</h2>
        <p>Email: bapuspatil98@gmail.com</p>
      </section>

      <footer>
        <p>© 2026 Bapu Patil</p>
      </footer>
    </div>
  );
}

export default App;