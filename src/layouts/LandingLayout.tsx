import React from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router";
import Categories from "../components/landing/articles/ArticlesCategoriesComponent";
import FeaturedPosts from "../components/landing/articles/FeaturedArticlesComponent";
import Footer from "../components/landing/generic/FooterComponent";
import Header from "../components/landing/generic/HeaderComponent";
import { categories } from "../constants/articles";

function Layout() {
  return (
    <div className="">
      <Header />
      <Categories categories={categories} />
      <main className="container">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
