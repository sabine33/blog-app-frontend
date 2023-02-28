import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { extractContent, formatDate, sliceContent } from "../../../helpers";
import { ArticleType } from "../../../types";

const DEFAULT_IMAGE = "https://via.placeholder.com/200";

function SingleArticleCardComponent({
  article,
  isEditable = false,
}: {
  article: ArticleType;
  isEditable: boolean;
}) {
  return (
    <div className="item card shadow-md">
      <img
        src={article.thumbnailUrl ?? DEFAULT_IMAGE}
        style={{ height: "200px", objectFit: "contain" }}
      />
      <div className="card-body">
        <div className="h4">
          <Link to={`/articles/${article.id}`} className="nav-link">
            {article.title}
          </Link>
        </div>
        <p className="card-text">
          {sliceContent(extractContent(article.content)!)}
        </p>
        <div className="d-flex justify-content-between align-items-center">
          <div className="btn-group">
            <Link
              to={`/articles/${article.id}`}
              className="btn btn-sm btn-outline-secondary"
            >
              View
            </Link>
            {isEditable && (
              <>
                <Link
                  to={`/dashboard/articles/${article.id}`}
                  className="btn btn-sm btn-outline-secondary"
                >
                  Edit
                </Link>
              </>
            )}
          </div>
          <small className="text-muted date">
            {article.createdAt ? formatDate(new Date(article.createdAt)) : ""}
          </small>
        </div>
      </div>
    </div>
  );
}

export default SingleArticleCardComponent;
