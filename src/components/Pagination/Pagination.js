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

  const handleClick = (page) => {
    setPage(page);
  };

  const pages = range(1, totalPage);

  return (
    <>
      <div className="usedTime-container-pagination">
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
