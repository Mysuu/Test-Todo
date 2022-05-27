import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const Pagination = ({ page, setPage }) => {
  const count = useSelector((state) => state.todoReducer.count);
  const [totalPage, setTotalPage] = useState(1);
  useEffect(() => {
    if (count) {
      if ((count / 10) % 1) {
        setTotalPage(Math.floor(count / 10) + 1);
      } else {
        setTotalPage(Math.floor(count / 10));
      }
    }
  }, [count]);

  const nextPage = () => {
    if (page === totalPage) return;
    setPage(page + 1);
  };

  const prevPage = () => {
    if (page === 1) return;
    setPage(page - 1);
  };

  return (
    <div className="pagination">
      <button
        className={`btn ${page === 1 ? "hide-button" : ""}`}
        onClick={prevPage}
      >
        Back
      </button>
      <button
        className={`btn ${page === totalPage ? "hide-button" : ""}`}
        onClick={nextPage}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
