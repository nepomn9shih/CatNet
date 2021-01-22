import React from "react";

type PaginatorPropsType = {
  totalUsersCount: number
  pageSize: number
  currentPage: number
  onPageChanged: Function
}

const Paginator = (props: PaginatorPropsType) => {
  let {totalUsersCount, pageSize, currentPage, onPageChanged} = props
  let pagesCount: number = Math.ceil(totalUsersCount / pageSize);
  let pages: Array<number> = [];
  for (let i:number = currentPage - 2; i <= currentPage + 2; i++) {
    if (i > 0 && i <= pagesCount) pages.push(i);
  }

  return (
    <div className="btn-group" role="group">
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
      {pages.map((page:number) => {
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
