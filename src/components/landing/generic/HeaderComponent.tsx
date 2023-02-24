import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import GithubLoginButton from "../auth/GithubLoginButtonComponent";
const BLOG_NAME = "LF NEWSPAPER";
function Header() {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const { user, isLoggedIn } = useSelector((state: any) => state.auth);

  const BrandElement = () => (
    <li className="nav-item">
      <Link className="navbar-brand" to="/">
        {BLOG_NAME}
      </Link>
    </li>
  );
  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <header className="blog-header">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <ul className="nav navbar-nav navbar-logo">
            <BrandElement />
          </ul>

          <button
            className="custom-toggler navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarsExample09"
            aria-controls="navbarsExample09"
            aria-expanded={!isNavCollapsed ? true : false}
            aria-label="Toggle navigation"
            onClick={handleNavCollapse}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`${
              isNavCollapsed ? "collapse" : ""
            } navbar-collapse py-2`}
            id="navbarToggler"
          >
            <ul className="navbar-nav ms-auto pe-md-3">
              <li className="nav-item active">
                <Link className="nav-link" to="/">
                  Home <span className="sr-only"></span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
            </ul>
            {!isLoggedIn ? (
              <GithubLoginButton />
            ) : (
              <div className="d-grid gap-2">
                <Link
                  type="button"
                  id=""
                  to="/dashboard"
                  className="btn btn-primary"
                >
                  Dashboard
                </Link>
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
