import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getAllTodo } from "../../redux/Todo/actions";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import "./Todo.css";
import { useLocation } from "react-router-dom";

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const { search } = useLocation();
  const query = new URLSearchParams(search);
  const currentPage = query.get("page");

  useEffect(() => {
    if (currentPage) {
      dispatch(getAllTodo(currentPage));
    } else {
      dispatch(getAllTodo(page));
    }
  }, [dispatch, page, currentPage]);

  return (
    <div>
      <div className="todo-list">
        <TodoForm page={page} todos={todos} setTodos={setTodos} />
        <TodoList page={page} setPage={setPage} />
      </div>
    </div>
  );
};

export default Todos;
