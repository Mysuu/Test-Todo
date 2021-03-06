import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, editTodo } from "../../redux/Todo/actions";
import Pagination from "../Pagination/Pagination";
import { Popconfirm } from "antd";
import { QuestionCircleOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const TodoList = ({ setPage, page }) => {
  const todos = useSelector((state) => state.todoReducer.data);
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const handleDeleteTodo = (todo) => {
    if (todos.length > 1 && page >= 1) {
      dispatch(deleteTodo(todo._id, page));
    } else {
      setPage(page - 1);
      navigate(`/todo?page=${page - 1}`);
      dispatch(deleteTodo(todo._id, page - 1));
    }
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
              <Popconfirm
                title="Bạn có chắc muốn xoá?"
                icon={<QuestionCircleOutlined style={{ color: "red" }} />}
                placement="leftBottom"
                onConfirm={() => handleDeleteTodo(todo)}
                okText="Chắc"
                okType="danger"
                cancelText="Không"
              >
                <button style={{ color: "red" }}>
                  <i className="fa fa-trash"></i>
                </button>
              </Popconfirm>
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
