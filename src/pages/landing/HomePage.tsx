import React from "react";
import { useSelector } from "react-redux";
import ArticlesListComponent from "../../components/landing/articles/ArticlesListComponent";
import HeadlinePostComponent from "../../components/landing/articles/HeadlinePostComponent";
import { getHeadlineArticle } from "../../helpers";

function HomePage() {
  const articles = useSelector((state: any) => state.articles.articles);
  const headlineArticle = getHeadlineArticle(articles);

  return (
    <div>
      {headlineArticle && <HeadlinePostComponent article={headlineArticle} />}
      {/* <FeaturedPosts /> */}
      <div className="title h4">Latest Articles</div>
      <div className="container">
        <ArticlesListComponent articles={articles} itemsPerPage={5} />
      </div>
    </div>
  );
}

export default HomePage;
