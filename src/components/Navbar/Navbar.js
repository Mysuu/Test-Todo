import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../redux/Form/actions";

const Navbar = () => {
  const count = useSelector((state) => state.todoReducer.count);
  const isLogin = useSelector((state) => state.formReducer.isLogin);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <>
      {isLogin ? (
        <div className="navbar">
          <h1>My Todo App</h1>
          <ul>
            <li>
              <button className="btn-logout" onClick={handleLogout}>
                Logout
              </button>
            </li>
            <li>Total todo: {count}</li>
          </ul>
        </div>
      ) : (
        <div className="navbar">
          <h1>My Todo App</h1>
        </div>
      )}
    </>
  );
};

export default Navbar;
