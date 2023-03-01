import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import { ArticleType } from "../../../types";
import SingleArticleCardComponent from "./SingleArticleCardComponent";

function ArticlesListComponent({
  articles,
  itemsPerPage = 5,
  isEditable = false,
}: {
  articles: ArticleType[];
  itemsPerPage: number;
  isEditable: boolean;
}) {
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = articles.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(articles.length / itemsPerPage);

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % articles.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };
  return (
    <div>
      <div className="articles">
        {currentItems.map((article: ArticleType, index: number) => (
          <SingleArticleCardComponent
            article={article}
            key={index}
            isEditable={isEditable}
          />
        ))}
      </div>
      <div className="d-flex justify-content-center py-3">
        {/* [TODO]:Pagination should be in backend */}
        <ReactPaginate
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="< previous"
          containerClassName={"pagination"}
          activeClassName={"active"}
        />
      </div>
    </div>
  );
}

export default ArticlesListComponent;
