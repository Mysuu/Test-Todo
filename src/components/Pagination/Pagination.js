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

  const range = (from, to, step = 1) => {
    let i = from;
    const range = [];

    while (i <= to) {
      range.push(i);
      i += step;
    }

    return range;
  };

  const fetchPageNumbers = () => {
    const pageNeighbours = 1;
    const totalNumbers = pageNeighbours * 2 + 3;
    const totalBlocks = totalNumbers + 2;
    if (totalPage > totalBlocks) {
      const startPage = Math.max(2, parseInt(page) - pageNeighbours);
      const endPage = Math.min(totalPage - 1, parseInt(page) + pageNeighbours);
      let pages = range(startPage, endPage);
      return [1, ...pages, totalPage];
    }

    return range(1, totalPage);
  };
  const handleClick = (page) => {
    setPage(page);
  };
  const pages = fetchPageNumbers();

  return (
    <>
      <div className="usedTime-container-pagination">
        {!page ? setPage(1) : ""}
        <nav aria-label="Countries Pagination">
          <ul className="pagination">
            {pages.map((item, index) => {
              return (
                <li
                  key={index}
                  className={`page-item${page === item ? " active" : ""}`}
                >
                  <Link
                    to={`/todo?page=${item}`}
                    className="page-link"
                    data-testid={item}
                    href="#"
                    onClick={() => handleClick(item)}
                  >
                    {item}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Pagination;
