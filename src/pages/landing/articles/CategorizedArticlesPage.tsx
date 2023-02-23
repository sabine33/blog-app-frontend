import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import ArticlesListComponent from "../../../components/landing/articles/ArticlesListComponent";
import { ArticleType } from "../../../types";

function CategorizedArticlesPage() {
  const { categoryName } = useParams();
  const articles = useSelector((state: any) => state.articles.articles);
  const [categorizedArticles, setCategorizedArticles] = useState([]);

  useEffect(() => {
    const categorizedArticles = articles.filter(
      (article: ArticleType) =>
        article.category?.toLocaleLowerCase() ==
        categoryName?.toLocaleLowerCase()
    );
    setCategorizedArticles(categorizedArticles);
  }, [categoryName]);
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="category__title h3">{categoryName}</div>

          {categorizedArticles.length < 1 ? (
            <p>No Articles Found.</p>
          ) : (
            <div className="container">
              <ArticlesListComponent
                articles={categorizedArticles}
                itemsPerPage={5}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CategorizedArticlesPage;
