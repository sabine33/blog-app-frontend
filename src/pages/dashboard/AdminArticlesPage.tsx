import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ArticlesListComponent from "../../components/landing/articles/ArticlesListComponent";
import SingleArticleCardComponent from "../../components/landing/articles/SingleArticleCardComponent";
import { articlesRequestedByAdmin } from "../../store/slices/articlesSlice";
import { ArticleType } from "../../types";

function AdminArticlesPage() {
  const { user } = useSelector((state: any) => state.auth);
  const articles = useSelector((state: any) => state.articles.articles);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(articlesRequestedByAdmin({ id: user.id }));
  }, []);

  return (
    <div className="admin-articles">
      <div className="row">
        <div className="articles justify-content-start">
          {articles.length < 1 && (
            <div className="text-center mx-auto mt-3 lead">
              No Articles Found.
            </div>
          )}
          : (
          <div className="container">
            <ArticlesListComponent
              articles={articles}
              itemsPerPage={6}
              isEditable={true}
            />
          </div>
          )
        </div>
      </div>
    </div>
  );
}

export default AdminArticlesPage;
