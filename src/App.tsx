import { useState } from "react";
import { Routes, Route } from "react-router";
import "./App.css";
import LandingLayout from "./layouts/LandingLayout";
import NoPage from "./pages/NoPage";
import Home from "./pages/landing/Home";
import Login from "./pages/landing/Login";
import Signup from "./pages/landing/Signup";
import DashboardLayout from "./layouts/DashboardLayout";
import DashboardHome from "./pages/dashboard/DashboardHome";
import Profile from "./pages/dashboard/Profile";
import Articles from "./pages/landing/Articles";
import SingleArticle from "./pages/landing/SingleArticle";
import GithubLoginSuccess from "./components/landing/GithubLoginSuccess";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingLayout />}>
        <Route path="*" element={<NoPage />} />
        <Route path="" element={<Home />} />
        <Route path="articles" element={<Articles />} />
        <Route path="articles/:id" element={<SingleArticle />} />
        <Route path="auth/login" element={<Login />} />
        <Route path="auth/github/success" element={<GithubLoginSuccess />} />

        <Route path="auth/signup" element={<Signup />} />
      </Route>
      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route path="" element={<DashboardHome />} />
        <Route path="profile" element={<Profile />} />
      </Route>
    </Routes>
  );
}

export default App;
