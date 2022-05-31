import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import { autoLogin } from "../redux/Form/actions";

const PrivateForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLogin = useSelector((state) => state.formReducer.isLogin);
  const user = JSON.parse(localStorage.getItem("user"));
  useEffect(() => {
    user?.accessToken && dispatch(autoLogin());
  }, [user, dispatch]);

  useEffect(() => {
    if (isLogin) {
      return navigate("/todo?page=1", { replace: true });
    }
  }, [isLogin, navigate]);

  return <Outlet />;
};

export default PrivateForm;
