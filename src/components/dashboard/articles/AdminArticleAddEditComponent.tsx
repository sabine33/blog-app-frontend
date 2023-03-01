import React, { FormEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
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
import { Article } from "../../../helpers/api";
import { useForm } from "react-hook-form";

const isUpdateForm = (id: string) => id !== "add";

function AdminArticleAddEditComponent() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();

  const [formValue, setFormValues] = useState<Partial<ArticleType>>({
    title: "",
    category: "",
    content: "",
    thumbnailUrl: "",
  });

  const [errors, setErrors] = useState<Partial<ArticleType>>({
    title: "",
    category: "",
    content: "",
    thumbnailUrl: "",
  });

  const validate = () => {
    const errors: Partial<ArticleType> = {};
    if (!formValue.title?.trim()) {
      errors.title = "Title is required";
    }

    if (!formValue.category?.trim()) {
      errors.category = "Category is required";
    }

    if (!formValue.content?.trim()) {
      errors.content = "Content is required";
    }

    if (!formValue.thumbnailUrl?.trim()) {
      errors.thumbnailUrl = "Thumbnail is required";
    }

    return errors;
  };

  const hasError = (errors: any) => {
    return Object.keys(errors).length > 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const errors = validate();

    if (hasError(errors)) {
      setErrors(errors);
      alert(Object.values(errors).toString());
    } else {
      if (isUpdateForm(id!)) {
        dispatch(articleUpdated({ id: id, article: formValue, navigate }));
      } else {
        dispatch(articleAdded({ article: formValue, navigate }));
      }
    }
  };

  useEffect(() => {
    const errors = validate();
    setErrors(errors);
  }, [formValue]);

  useEffect(() => {
    if (isUpdateForm(id!)) {
      Article.getArticle(id!)
        .then((response: any) => {
          let article = response.data as ArticleType;
          setFormValues(article);
        })
        .catch((err: any) => {
          alert(err.message || "Error loading content.");
        });
    }
  }, [id]);

  const handleDelete = () => {
    if (confirm("Are you sure to delete this article?")) {
      dispatch(articleDeleted({ id, navigate }));
    }
  };

  const handleFileUpload = (fileUrl: string) => {
    setFormValues({ ...formValue, thumbnailUrl: fileUrl });
  };

  return (
    <main className="admin__main">
      <div className="mx-2 px-4">
        <h2 className="">Add/Edit Article</h2>
        <div className="row my-2">
          <div className="col text-start">
            <form className="form" onSubmit={handleSubmit}>
              <div className="mb-3 form-group">
                <label className="form-label">Title</label>
                <input
                  type="text"
                  className={`form-control ${errors.title ? "is-invalid" : ""}`}
                  value={formValue.title}
                  onChange={(e) =>
                    setFormValues({ ...formValue, title: e.target.value })
                  }
                />
                {errors.title && (
                  <div className="invalid-feedback">{errors.title}</div>
                )}
              </div>

              <div className="mb-3 form-group">
                <label htmlFor="" className="form-label">
                  Category
                </label>
                <select
                  name="selectedCategory"
                  className={`form-control ${
                    errors.category ? "is-invalid" : ""
                  }`}
                  value={formValue.category}
                  onChange={(e) =>
                    setFormValues({ ...formValue, category: e.target.value })
                  }
                >
                  <option value="">Select category</option>
                  {categories.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
                {errors.category && (
                  <div className="invalid-feedback">{errors.category}</div>
                )}
              </div>

              <div className="mb-3">
                <label htmlFor="" className="form-label">
                  Content
                </label>
                <ReactQuill
                  theme="snow"
                  className={`${errors.content ? "is-invalid" : ""}`}
                  value={formValue.content}
                  onChange={(value) =>
                    setFormValues({ ...formValue, content: value })
                  }
                  style={{
                    height: "200px",
                    marginBottom: "100px",
                  }}
                />
                <p className="invalid-feedback">{errors.content}</p>
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
                  <UploadedFile file={formValue.thumbnailUrl} />
                </div>
                <p className="text-danger">{errors.thumbnailUrl}</p>
              </div>
              <button type="submit" className="btn btn-primary">
                Save
              </button>

              {isUpdateForm(id!) && (
                <button
                  type="button"
                  className="btn btn-danger mx-2"
                  onClick={handleDelete}
                >
                  Delete
                </button>
              )}
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}

export default AdminArticleAddEditComponent;
