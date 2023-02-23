import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import ArticlesListComponent from "../../../components/landing/articles/ArticlesListComponent";
import { getHeadlineArticle } from "../../../helpers";

function ArticlesListPage() {
  const articles = useSelector((state: any) => state.articles.articles);

  return (
    <div className="container">
      <div className="row">
        <div className="heading display-5">Articles</div>
      </div>
      <div className="row">
        <ArticlesListComponent articles={articles} itemsPerPage={4} />
      </div>
    </div>
  );
}

export default ArticlesListPage;
