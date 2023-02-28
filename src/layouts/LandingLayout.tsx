import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Outlet } from "react-router";
import Categories from "../components/landing/articles/ArticlesCategoriesComponent";
import FeaturedPosts from "../components/landing/articles/FeaturedArticlesComponent";
import AlertComponent from "../components/landing/generic/AlertComponent";
import Footer from "../components/landing/generic/FooterComponent";
import Header from "../components/landing/generic/HeaderComponent";
import { categories } from "../constants/articles";
import { clearMessage } from "../store/slices/messageSlice";
import "../styles/Landing.scss";
function Layout() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearMessage());
  }, []);

  return (
    <div className="">
      <Header />
      <Categories categories={categories} />
      <AlertComponent />
      <main className="container">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
