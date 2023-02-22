import React from "react";

function HeadlinePost() {
  return (
    <div className="p-4 p-md-5 mb-4 text-white rounded bg-dark row">
      <div className="col-md-6 px-3">
        <h1 className="display-6 fst-italic">
          Title of a longer featured blog post
        </h1>
        <p className="lead my-3">
          Multiple lines of text that form the lede, informing new readers
          quickly and efficiently about what’s most interesting in this post’s
          contents.
        </p>
        <p className="lead mb-0">
          <a href="#" className="text-white fw-bold">
            Continue reading...
          </a>
        </p>
      </div>
      <div className="col-md-6 px-3">
        <img
          className="img-responsive"
          src="https://www.shutterstock.com/image-vector/news-background-world-map-backdrop-260nw-691718833.jpg"
        ></img>
      </div>
    </div>
  );
}

export default HeadlinePost;
