import React from "react";
import { Link } from "react-router-dom";
import { extractContent, sliceContent } from "../../../helpers";
import { ArticleType } from "../../../types";

function HeadlinePostComponent({ article }: { article: ArticleType }) {
  return (
    <div className="p-4 p-md-5 mb-4 text-white rounded bg-dark row">
      <div className="col-md-6 px-3">
        <h1 className="h3">{article.title}</h1>
        <p className="p my-3 ">
          {sliceContent(extractContent(article.content)!, 100)}
        </p>
        <p className="lead mb-0">
          <Link to={`/articles/${article.id}`} className="text-white fw-bold">
            Continue reading
          </Link>
        </p>
      </div>
      <div className="col-md-6 px-3">
        <img
          className="img-responsive"
          style={{ width: "350px" }}
          src={article.thumbnailUrl}
          alt="No image preview available."
        ></img>
      </div>
    </div>
  );
}

export default HeadlinePostComponent;
