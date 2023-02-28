import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { Article } from "../../../helpers/apiHelper";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import UploadImageComponent, { UploadedFile } from "./UploadImageComponent";
import { categories } from "../../../constants/articles";
import { ArticleType } from "../../../types";
import {
  articleDeleted,
  articleUpdated,
  articleAdded,
} from "../../../store/slices/articlesSlice";

const isEditForm = (id: string) => id !== "add";

function AdminArticleAddEditComponent() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [thumbnailUrl, setThumbnailUrl] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("world");

  useEffect(() => {
    if (isEditForm(id!)) {
      Article.getArticle(id!)
        .then((response) => {
          let article = response.data as ArticleType;
          setTitle(article.title);
          setContent(article.content);
          setCategory(article.category || "world");
          setThumbnailUrl(article.thumbnailUrl);
        })
        .catch((err) => {
          alert(err.message || "Error loading content.");
        });
    }
  }, [id]);

  const handleSubmit = () => {
    const articleContent = { title, content, thumbnailUrl, category };

    if (isEditForm(id!)) {
      dispatch(articleUpdated({ id: id, article: articleContent }));
    } else {
      dispatch(articleAdded({ article: articleContent }));
    }
  };
  const handleDelete = () => {
    dispatch(articleDeleted({ id }));
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
                  <option key={item} value={item}>
                    {item}
                  </option>
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
            {isEditForm(id!) && (
              <button
                type="button"
                className="btn btn-danger mx-2"
                onClick={handleDelete}
              >
                Delete
              </button>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

export default AdminArticleAddEditComponent;
