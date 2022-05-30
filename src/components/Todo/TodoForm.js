import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createTodo, updateTodo } from "../../redux/Todo/actions";

const TodoForm = ({ todos, setTodos, page }) => {
  const valueEdit = useSelector((state) => state.todoReducer.valueEdit);
  const dispatch = useDispatch();

  const onChangeTodo = (e) => {
    setTodos(e.target.value);
  };

  const onSubmitAddTodo = (e) => {
    e.preventDefault();
    dispatch(createTodo(todos, page));
    setTodos("");
  };

  useEffect(() => {
    if (valueEdit) {
      setTodos(valueEdit.title);
    }
  }, [setTodos, valueEdit]);

  const handleEditTodo = (e, todos) => {
    if (!todos) return;
    e.preventDefault();
    const dataTodoEdit = {
      _id: valueEdit._id,
      title: todos,
      is_finished: false,
    };
    dispatch(updateTodo(dataTodoEdit));
    setTodos("");
  };

  return (
    <div>
      <form className="todo-form">
        <input
          className="input-form"
          type="text"
          required
          placeholder={!valueEdit ? "Enter a Todo..." : ""}
          value={todos}
          onChange={onChangeTodo}
        ></input>
        <div className="add-todo">
          {!valueEdit ? (
            <button onClick={onSubmitAddTodo} className="btn-add" type="submit">
              Add
            </button>
          ) : (
            <button
              onClick={(e) => handleEditTodo(e, todos)}
              className="btn-add"
              type="submit"
            >
              Save
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default TodoForm;
