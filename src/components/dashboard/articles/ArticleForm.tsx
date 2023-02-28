import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { ArticleType } from "../../../types";

type ArticleFormProps = {
  onSubmit: (
    article: Pick<
      ArticleType,
      "title" | "content" | "category" | "isFeatured" | "thumbnailUrl"
    >
  ) => void;
  article?: ArticleType;
};

const ArticleForm = ({ onSubmit, article }: ArticleFormProps) => {
  const [formData, setFormData] = useState<
    Pick<
      ArticleType,
      "title" | "content" | "category" | "isFeatured" | "thumbnailUrl"
    >
  >({
    title: article?.title || "",
    content: article?.content || "",
    thumbnailUrl: article?.thumbnailUrl || "",
    isFeatured: article?.isFeatured || false,
    category: article?.category || "",
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(formData);
  };

  return (
    <Form onSubmit={handleSubmit} className="ps-3 mt-4">
      <Form.Label>
        <h3>Add/Edit Article</h3>
      </Form.Label>
      <Form.Group controlId="formTitle">
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group controlId="formContent">
        <Form.Label>Content</Form.Label>
        <Form.Control
          as="textarea"
          rows={5}
          placeholder="Enter content"
          name="content"
          value={formData.content}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group controlId="formThumbnailUrl">
        <Form.Label>Thumbnail URL</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter thumbnail URL"
          name="thumbnailUrl"
          value={formData.thumbnailUrl}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="formCategory">
        <Form.Label>Category</Form.Label>

        <Form.Select size="sm">
          <option>Large select</option>
        </Form.Select>
      </Form.Group>

      <Form.Group controlId="formIsFeatured">
        <Form.Check
          type="checkbox"
          label="Featured"
          name="isFeatured"
          checked={formData.isFeatured}
          onChange={(event) => {
            setFormData((prevFormData) => ({
              ...prevFormData,
              isFeatured: event.target.checked,
            }));
          }}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default ArticleForm;
