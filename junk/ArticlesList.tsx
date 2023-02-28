import React, { useEffect } from "react";
import ReactPaginate from "react-paginate";
import { useSelector, useDispatch } from "react-redux";
import { articlesRequested } from "../../../store/slices/articlesSlice";
import { ArticleType } from "../../../types";
import ArticlesListComponent from "./ArticlesListComponent";
import HeadlinePostComponent from "./HeadlinePostComponent";

const ARTICLES_PER_PAGE = 10;
const ArticlesList = () => {
  const dispatch = useDispatch();
  const articles = useSelector((state: any) => state.articles.articles);
  const loading = useSelector((state: any) => state.articles.loading);
  const error = useSelector((state: any) => state.articles.error);

  useEffect(() => {
    dispatch(articlesRequested());
  }, []);

  if (loading) {
    return <div>Loading articles...</div>;
  }

  if (error) {
    return <div>Error loading articles: {error}</div>;
  }

  return (
    <div className="container">
      <div className="row">
        {articles.length > 0 && <HeadlinePostComponent article={articles[0]} />}
      </div>
      <div className="title h4 text-center">Latest Articles</div>

      <div className="articles d-flex justify-content-center">
        <ArticlesListComponent
          articles={articles}
          itemsPerPage={ARTICLES_PER_PAGE}
          isEditable={false}
        />
      </div>
    </div>
  );
};

export default ArticlesList;
