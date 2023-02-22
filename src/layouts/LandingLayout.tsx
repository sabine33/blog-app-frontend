import React from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router";
import Categories from "../components/landing/Categories";
import FeaturedPosts from "../components/landing/FeaturedPosts";
import Footer from "../components/landing/Footer";
import Header from "../components/landing/Header";
import HeadlinePost from "../components/landing/HeadlinePost";
// import "./Landing.css";
function Layout() {
  return (
    <div className="">
      <Header />
      <Categories />
      <main className="container">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
