import ArticlesList from "../../components/landing/articles/ArticlesList";
import ArticlesListComponent from "../../components/landing/articles/ArticlesListComponent";

function HomePage() {
  return (
    <div className="container">
      <div className="row">
        <ArticlesList />
      </div>
    </div>
  );
}

export default HomePage;
