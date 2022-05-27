import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";

function PrivateTodo() {
  let navigate = useNavigate();
  const { isLogin } = useSelector((state) => state.formReducer);
  useEffect(() => {
    if (!isLogin) {
      return navigate("/", { replace: true });
    }
  }, [isLogin, navigate]);

  if (!isLogin) return null;

  return <Outlet />;
}

export default PrivateTodo;
