import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SingleArticleCardComponent from "../../components/landing/articles/SingleArticleCardComponent";
import { getArticlesFetch } from "../../store/slices/articlesSlice";
import { ArticleType } from "../../types";

function AdminArticlesPage() {
  const articles = useSelector((state: any) => state.articles.articles);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getArticlesFetch());
  }, []);

  return (
    <div className="admin-articles">
      <div className="row">
        <div className="articles justify-content-start">
          {articles.map((article: ArticleType) => (
            <div className="item" key={article.id}>
              <SingleArticleCardComponent
                article={article}
                isEditable={true}
                key={article.id}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AdminArticlesPage;
