import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { ArticleType } from "../../../types";
import "../../../styles/SingleArticle.scss";
import { useSelector } from "react-redux";
import { Article } from "../../../helpers/apiHelper";
import Parser from "html-react-parser";

function ArticleDetailPage() {
  const [article, setArticle] = useState<ArticleType | undefined>(undefined);
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      Article.getArticle(id)
        .then((response) => {
          let article = response.data;
          setArticle(article);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [id]);

  return (
    <div className="container article">
      <div className="row">
        <div className="col-12 d-flex flex-column gap-5 text-center">
          <div className="article__title display-4">{article?.title}</div>
          <div className="article__thumbnail">
            <img
              src={article?.thumbnailUrl}
              className="thumbnail"
              alt="Image Thumbnail"
            />
          </div>
          <div className="article__content text-start">
            <div>{Parser(article?.content ?? "")}</div>
          </div>
          <div className="article__footer">
            <a href="#">SHARE</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArticleDetailPage;
