import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid py-2 containerFix">
        <a className="navbar-brand logo fs-1" href="#">
          Insure
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav ms-auto text-uppercase">
            <li className="nav-item me-4">
              <a className="nav-link" href="#">
                How We Work
              </a>
            </li>
            <li className="nav-item me-4">
              <a className="nav-link" href="#">
                Blog{" "}
              </a>
            </li>
            <li className="nav-item me-4">
              <a className="nav-link" href="#">
                Account{" "}
              </a>
            </li>
            <li className="nav-item">
              <button className="px-5 py-2 text-uppercase nav_btn">View Plans</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
