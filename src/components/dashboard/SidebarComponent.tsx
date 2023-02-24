import React from "react";
import { Link } from "react-router-dom";

function SidebarComponent() {
  return (
    <nav className="admin__nav">
      <ul className="menu">
        <li className="menu__item">
          <Link className="menu__link" to="/dashboard">
            Dashboard
          </Link>
        </li>
        <li className="menu__item">
          <Link className="menu__link" to="/dashboard/profile">
            Profile
          </Link>
        </li>
        <li className="menu__item">
          <Link className="menu__link" to="/dashboard/articles">
            Articles
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default SidebarComponent;
