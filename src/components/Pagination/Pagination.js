import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

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
    setPage(parseInt(page) + 1);
  };

  const prevPage = () => {
    if (page === 1) return;
    setPage(parseInt(page) - 1);
  };

  return (
    <div className="pagination">
      <Link to={`?page=${parseInt(page) - 1}`}>
        <button
          className={`btn ${page === 1 ? "hide-button" : ""}`}
          onClick={prevPage}
        >
          Back
        </button>
      </Link>
      <Link to={`?page=${parseInt(page) + 1}`}>
        <button
          className={`btn ${page === totalPage ? "hide-button" : ""}`}
          onClick={nextPage}
        >
          Next
        </button>
      </Link>
    </div>
  );
};

export default Pagination;
