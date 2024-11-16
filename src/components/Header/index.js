import React from "react";

const Header = () => {
  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark page-navbar gradient">
      <div className="container">
        <a className="navbar-brand logo" href="#">
          J.K
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item item"></li>
            <li className="nav-item item">
              <a className="nav-link" href="#portofolio">
                Portofolios
              </a>
            </li>
            <li className="nav-item item">
              <a className="nav-link" href="#education">
                Education
              </a>
            </li>
            <li className="nav-item item">
              <a className="nav-link" href="#skills">
                Skills
              </a>
            </li>
            <li className="nav-item item">
              <a className="nav-link" href="#hobbies">
                Hobbies
              </a>
            </li>
          </ul>
        </div>
        <a
          href="#"
          className="btn btn-success download-template"
          role="button"
          aria-disabled="true"
        >
          Download
        </a>
      </div>
    </nav>
  );
};

export default Header;
