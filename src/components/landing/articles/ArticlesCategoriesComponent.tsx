import React from "react";
import { Link } from "react-router-dom";

function Categories({ categories }: { categories: string[] }) {
  return (
    <div className="nav-scroller py-1 mb-2">
      <nav className="nav d-flex justify-content-center gap-3">
        {categories.map((category) => (
          <Link
            className="p-2 link-secondary"
            to={`/articles/category/${category}`}
            key={category}
          >
            {category}
          </Link>
        ))}
      </nav>
    </div>
  );
}

export default Categories;
