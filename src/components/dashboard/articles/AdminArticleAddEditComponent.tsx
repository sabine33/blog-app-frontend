import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  onArticleCreate,
  onArticleDelete,
  onArticleFetch,
  onArticleUpdate,
} from "../../../store/slices/articlesSlice";
import { useParams } from "react-router";
import { Article } from "../../../helpers/apiHelper";
import ReactQuill from "react-quill";

import "react-quill/dist/quill.snow.css";
import UploadImageComponent, { UploadedFile } from "./UploadImageComponent";
import { categories } from "../../../constants/articles";

function AdminArticleAddEditComponent() {
  const { id = -1 } = useParams();
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [thumbnailUrl, setThumbnailUrl] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    if (id && +id >= 0) {
      Article.getArticle(+id)
        .then((response) => {
          let article = response.data;
          setTitle(article.title);
          setContent(article.content);
          setThumbnailUrl(article.thumbnailUrl);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [id]);

  const handleSubmit = () => {
    const articleContent = { title, content, thumbnailUrl };
    if (!id || !Number.parseInt(id)) {
      return;
    }
    if (+id < 0) {
      dispatch(onArticleCreate({ article: articleContent }));
    } else {
      console.log(id);
      dispatch(onArticleUpdate({ id: +id, article: articleContent }));
    }
  };
  const handleDelete = () => {
    dispatch(onArticleDelete({ id }));
  };

  const getTitle = () => {
    if (!id) {
      return;
    }
    return +id >= 0 ? "Edit Article" : "Add Article";
  };

  const handleFileUpload = (fileUrl: string) => {
    setThumbnailUrl(fileUrl);
  };

  return (
    <main className="admin__main">
      <div className="mx-2 px-4">
        <h2 className="">Add Article</h2>
        <div className="row my-2">
          <div className="col text-start">
            <div className="mb-3 form-group">
              <label htmlFor="" className="form-label">
                Title
              </label>
              <input
                type="text"
                className="form-control"
                name=""
                id=""
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="mb-3 form-group">
              <label htmlFor="" className="form-label">
                Category
              </label>
              <select
                name="selectedCategory"
                className="form-control"
                onChange={(e) => setCategory(e.target.value)}
              >
                {categories.map((item) => (
                  <option value={item}>{item}</option>
                ))}
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="" className="form-label">
                Content
              </label>
              <ReactQuill
                theme="snow"
                value={content}
                onChange={setContent}
                style={{
                  height: "200px",
                  marginBottom: "100px",
                }}
              />
            </div>

            <div className="row mb-4">
              <label htmlFor="" className="form-label">
                <strong>Thumbnail</strong>
              </label>
              <div className="col-6">
                <div className="mb-3">
                  <UploadImageComponent setOnFileUpload={handleFileUpload} />
                </div>
              </div>
              <div className="col-4">
                <UploadedFile file={thumbnailUrl} />
              </div>
            </div>

            <button
              type="submit"
              className="btn btn-primary"
              onClick={handleSubmit}
            >
              Save
            </button>
            <button
              type="button"
              className="btn btn-danger mx-2"
              onClick={handleDelete}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default AdminArticleAddEditComponent;
