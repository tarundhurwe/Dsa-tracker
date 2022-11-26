import React from "react";
import { Link } from "react-router-dom"
import "../assets/css/Nav.css"
import logo from '../assets/images/Code_Badger-removebg-preview (1).png';

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
      <div className="container-fluid">
        <Link className="navbar-brand text-light tag" to="/">
          <img className="site-logo" src={logo} alt="logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav justify-content-end">
            <li className="nav-item on-hover">
              <Link className="nav-link text-light fw-bold" to="/">
                Home
                <i className="bi bi-house-fill nav-icon"></i>
              </Link>
            </li>
            <li className="nav-item on-hover">
              <Link className="nav-link  text-light fw-bold" to="/about">
                About
                <i className="bi bi-info-circle-fill nav-icon"></i>
              </Link>
            </li>
            <li className="nav-item on-hover">
              <Link className="nav-link  text-light fw-bold" to="/contact">
                Contact
                <i className="bi bi-envelope-fill nav-icon"></i>
              </Link>
            </li>
            <li className="nav-item on-hover">
              <Link className="nav-link text-light fw-bold" to="/profile">
                <i className="bi bi-person-bounding-box"></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
