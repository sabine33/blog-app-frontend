import { Routes, Route } from "react-router";
import "./styles/App.scss";
import DashboardLayout from "./layouts/DashboardLayout";
import LandingLayout from "./layouts/LandingLayout";
import AdminArticlesPage from "./pages/dashboard/AdminArticlesPage";
import DashboardHomePage from "./pages/dashboard/DashboardHomePage";
import ProfilePage from "./pages/dashboard/ProfilePage";
import AboutPage from "./pages/landing/AboutPage";
import ArticleDetailPage from "./pages/landing/articles/ArticleDetailPage";
import ArticlesListPage from "./pages/landing/articles/ArticlesListPage";
import CategorizedArticlesPage from "./pages/landing/articles/CategorizedArticlesPage";
import GithubLoginCallbackPage from "./pages/landing/auth/GithubLoginCallbackPage";
import HomePage from "./pages/landing/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import ArticleForm from "./components/dashboard/articles/ArticleForm";
import AdminArticleAddEditComponent from "./components/dashboard/articles/AdminArticleAddEditComponent";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingLayout />}>
        <Route path="*" element={<NotFoundPage />} />
        <Route path="" element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="articles" element={<ArticlesListPage />} />
        <Route path="articles/:id" element={<ArticleDetailPage />} />
        <Route
          path="articles/category/:categoryName"
          element={<CategorizedArticlesPage />}
        />
        <Route
          path="auth/github/success"
          element={<GithubLoginCallbackPage />}
        />
      </Route>
      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route path="" element={<DashboardHomePage />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="articles" element={<AdminArticlesPage />} />
        <Route path="articles/:id" element={<AdminArticleAddEditComponent />} />
      </Route>
    </Routes>
  );
}

export default App;
