import React from "react";
import "./App.css";

function App() {
  return (
    <div className="app">
      <section className="hero">
        <div className="hero-content">
          <h1>
            Smart Project Management <br /> with AI Power
          </h1>
          <p>
            Manage projects, assign tasks, track progress, and boost productivity
            with AI-driven insights — all in one place.
          </p>

          <div className="hero-buttons">
            <button className="btn primary">Get Started</button>
            <button className="btn secondary">Learn More</button>
          </div>
        </div>

        <div className="hero-image">
          <img
            src="https://cdn-icons-png.flaticon.com/512/906/906334.png"
            alt="project management"
          />
        </div>
      </section>
    </div>
  );
}

export default App;