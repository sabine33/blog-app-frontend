import { ArticleType } from "../../../types";
import ArticlesListComponent from "./ArticlesListComponent";

function HomePageArticlesListComponent({
  articles,
}: {
  articles: ArticleType[];
}) {
  return (
    <div className="articles py-3 bg-light">
      <ArticlesListComponent articles={articles} itemsPerPage={5} />
    </div>
  );
}

export default HomePageArticlesListComponent;
