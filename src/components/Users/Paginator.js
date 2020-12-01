import React from "react";

const Paginator = ({totalUsersCount, pageSize, currentPage, onPageChanged}) => {
  let pagesCount = Math.ceil(totalUsersCount / pageSize);
  let pages = [];
  for (let i = currentPage - 3; i <= currentPage + 3; i++) {
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
          1 === currentPage ? "btn btn-warning" : "btn btn-light"
        }
      >
        &lt;&lt;
      </button>
      {pages.map((page) => {
        return (
          <button
            type="button"
            onClick={() => {
              onPageChanged(page);
            }}
            className={
              page === currentPage ? "btn btn-warning" : "btn btn-light"
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
          pagesCount === currentPage ? "btn btn-warning" : "btn btn-light"
        }
      >
        &gt;&gt;
      </button>
    </div>
  );
};    
export default Paginator;
