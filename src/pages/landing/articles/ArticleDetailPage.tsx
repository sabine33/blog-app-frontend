import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { articles } from "../../../constants/articles";
import { ArticleType } from "../../../types";
import "../../../styles/SingleArticle.scss";
function ArticleDetailPage() {
  const [article, setArticle] = useState<ArticleType | undefined>(undefined);
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      const article = articles.find(
        (article: ArticleType) => article.id === +id
      );
      setArticle(article);
    }
  }, []);

  return (
    <div className="container article">
      <div className="row">
        <div className="col-12 d-flex flex-column gap-5">
          <div className="article__title display-4">{article?.title}</div>
          <div className="article__thumbnail">
            <img src={article?.thumbnailUrl} className="thumbnail" />
          </div>
          <div className="article__content text-start">{article?.content}</div>
          <div className="article__footer">
            <a href="#">SHARE</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArticleDetailPage;
