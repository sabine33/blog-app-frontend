import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { put } from "redux-saga/effects";
import ArticlesListComponent from "../../../components/landing/articles/ArticlesListComponent";
import HeadlinePostComponent from "../../../components/landing/articles/HeadlinePostComponent";
import { articles } from "../../../constants/articles";
import { getHeadlineArticle } from "../../../helpers";
import { articlesRequested } from "../../../store/slices/articlesSlice";
import { ArticleType } from "../../../types";

const headlineArticle = articles.find(
  (article: ArticleType) => article.isFeatured === true
);
function ArticlesListPage() {
  const dispatch = useDispatch();
  const articles = useSelector((state: any) => state.articles.articles);

  useEffect(() => {
    dispatch(articlesRequested());
  }, []);

  return (
    <div className="container">
      <div className="row">
        {headlineArticle && <HeadlinePostComponent article={headlineArticle} />}
      </div>
      <div className="row">
        <div className="heading h3 text-center">Articles</div>
      </div>
      <div className="row">
        <ArticlesListComponent
          articles={articles}
          itemsPerPage={6}
          isEditable={false}
        />
      </div>
    </div>
  );
}

export default ArticlesListPage;
