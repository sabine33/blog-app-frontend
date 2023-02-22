import React from "react";
import { Link } from "react-router-dom";
import GithubLoginButton from "../generic/GithubLoginButton";
const BLOG_NAME = "LF NEWSPAPER";
function Header() {
  const BrandElement = () => (
    <li className="nav-item">
      <Link className="navbar-brand" to="/">
        {BLOG_NAME}
      </Link>
    </li>
  );

  return (
    <header className="blog-header">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <ul className="nav navbar-nav navbar-logo mx-auto mx-auto-lg ">
            <BrandElement />
          </ul>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarToggler"
            aria-controls="navbarToggler"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarToggler">
            <ul className="navbar-nav ms-auto mt-2 me-5 mt-lg-0">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Home <span className="sr-only"></span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
            </ul>
            <GithubLoginButton />
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
