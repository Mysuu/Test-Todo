import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";

function PrivateTodo() {
  let navigate = useNavigate();
  const isLogin = useSelector((state) => state.formReducer.isLogin);
  useEffect(() => {
    if (!isLogin) {
      return navigate("/", { replace: true });
    }
  }, [isLogin, navigate]);

  return <Outlet />;
}

export default PrivateTodo;
