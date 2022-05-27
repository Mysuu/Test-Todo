import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, editTodo } from "../../redux/Todo/actions";
import Pagination from "../Pagination/Pagination";

const TodoList = ({ setPage, page }) => {
  const todos = useSelector((state) => state.todoReducer.data);
  const dispatch = useDispatch();

  const handleDeleteTodo = (todo) => {
    dispatch(deleteTodo(todo._id, page));
  };

  const handleEditTodo = (todo) => {
    dispatch(editTodo(todo));
  };

  return (
    <div>
      <ul>
        {todos &&
          todos.map((todo) => (
            <li key={todo._id}>
              {todo.title}
              <button
                style={{ color: "red" }}
                onClick={() => handleDeleteTodo(todo)}
              >
                <i className="fa fa-trash"></i>
              </button>
              <button
                style={{ color: "orange" }}
                onClick={() => handleEditTodo(todo)}
              >
                <i className="fa fa-edit"></i>
              </button>
            </li>
          ))}
      </ul>
      <Pagination page={page} setPage={setPage} />
    </div>
  );
};

export default TodoList;
