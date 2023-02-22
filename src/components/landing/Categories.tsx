import React from "react";

function Categories() {
  return (
    <div className="nav-scroller py-1 mb-2">
      <nav className="nav d-flex justify-content-center gap-3">
        <a className="p-2 link-secondary" href="#">
          World
        </a>

        <a className="p-2 link-secondary" href="#">
          Technology
        </a>

        <a className="p-2 link-secondary" href="#">
          Culture
        </a>

        <a className="p-2 link-secondary" href="#">
          Science
        </a>

        <a className="p-2 link-secondary" href="#">
          Travel
        </a>
      </nav>
    </div>
  );
}

export default Categories;
