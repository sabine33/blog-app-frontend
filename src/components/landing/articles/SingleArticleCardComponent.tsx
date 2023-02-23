import React from "react";
import { Link } from "react-router-dom";
import { formatDate, sliceContent } from "../../../helpers";
import { ArticleType } from "../../../types";

function SingleArticleCardComponent({ article }: { article: ArticleType }) {
  return (
    <div className="item card shadow-md">
      <img src={article.thumbnailUrl} />
      <div className="card-body">
        <div className="h4">
          <Link to={`/articles/${article.id}`} className="nav-link">
            {article.title}
          </Link>
        </div>
        <p className="card-text">{sliceContent(article.content)}</p>
        <div className="d-flex justify-content-between align-items-center">
          <div className="btn-group">
            <Link
              to={`/articles/${article.id}`}
              className="btn btn-sm btn-outline-secondary"
            >
              View
            </Link>
          </div>
          <small className="text-muted">{formatDate(article.createdAt)}</small>
        </div>
      </div>
    </div>
  );
}

export default SingleArticleCardComponent;
