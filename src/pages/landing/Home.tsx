import React from "react";
import Articles from "../../components/landing/Articles";
import FeaturedPosts from "../../components/landing/FeaturedPosts";
import HeadlinePost from "../../components/landing/HeadlinePost";

function Home() {
  return (
    <div>
      <HeadlinePost />
      <FeaturedPosts />
      <div className="title display-5">Latest Articles</div>
      <Articles />
    </div>
  );
}

export default Home;
