import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { formatDate, sliceContent } from "../../../helpers";
import { onArticleDelete } from "../../../store/slices/articlesSlice";
import { ArticleType } from "../../../types";

function SingleArticleCardComponent({
  article,
  isEditable = false,
}: {
  article: ArticleType;
  isEditable: boolean;
}) {
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
            {isEditable && (
              <>
                <Link
                  to={`/dashboard/articles/${article.id}`}
                  className="btn btn-sm btn-outline-secondary"
                >
                  Edit
                </Link>
                <button className="btn btn-sm btn-outline-secondary">
                  <i className="fa fa-trash"></i>
                </button>
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
