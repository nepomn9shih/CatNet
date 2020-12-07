import React from "react";

const Paginator = ({totalUsersCount, pageSize, currentPage, onPageChanged}) => {
  let pagesCount = Math.ceil(totalUsersCount / pageSize);
  let pages = [];
  for (let i = currentPage - 2; i <= currentPage + 2; i++) {
    if (i > 0 && i <= pagesCount) pages.push(i);
  }

  return (
    <div class="btn-group" role="group">
      <button
        type="button"
        disabled={1 === currentPage}
        onClick={() => {
          onPageChanged(1);
        }}
        className={
          1 === currentPage ? "btn btn-warning btn-sm" : "btn btn-light btn-sm"
        }
      >
        &lt;&lt;
      </button>
      {pages.map((page) => {
        return (
          <button
            type="button"
            key={page}
            onClick={() => {
              onPageChanged(page);
            }}
            className={
              page === currentPage ? "btn btn-warning btn-sm" : "btn btn-light btn-sm"
            }
          >
            {page}
          </button>
        );
      })}
      <button
        type="button"
        disabled={pagesCount === currentPage}
        onClick={() => {
          onPageChanged(pagesCount);
        }}
        className={
          pagesCount === currentPage ? "btn btn-warning btn-sm" : "btn btn-light btn-sm"
        }
      >
        &gt;&gt;
      </button>
    </div>
  );
};    
export default Paginator;
