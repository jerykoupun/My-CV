import React from "react";

const Intro = () => {
  return (
    <section className="cv-block block-intro border-bottom">
      <div className="container">
        <div className="avatar">
          <img
            className="img-fluid rounded-circle"
            src="assets/img/avatar.jpg"
          />
        </div>
        <p>
          Hello! I am <strong>Jery Koupun</strong>.I am a student at the Faculty
          of Computer Science at Universitas Klabat, majoring in Information
          Systems. I have a strong interest in design and analysis.
        </p>
        <a href="#" className="btn btn-outline-success">
          Hire Me
        </a>
      </div>
    </section>
  );
};

export default Intro;
