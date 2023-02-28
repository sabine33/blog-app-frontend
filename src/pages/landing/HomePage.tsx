import ArticlesListComponent from "../../components/landing/articles/ArticlesListComponent";
import ArticlesListPage from "./articles/ArticlesListPage";

function HomePage() {
  return (
    <div className="container">
      <div className="row">
        <ArticlesListPage />
      </div>
    </div>
  );
}

export default HomePage;
