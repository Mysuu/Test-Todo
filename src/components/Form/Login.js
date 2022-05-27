import React, { useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../redux/Form/actions";
import "./Form.css";

const Login = () => {
  const [value, setValue] = useState({
    username: "",
    password: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: value,
    validationSchema: Yup.object({
      username: Yup.string()
        .min(2, "Mininum 2 characters")
        .max(15, "Maximum 30 characters")
        .required("You have not entered your username!"),
      password: Yup.string()
        .min(6, "Minimum 6 characters")
        .required("You have not entered your password!"),
    }),
    onSubmit: (values) => {
      const user = { username: values.username, password: values.password };
      dispatch(login(user));
      setValue("");
      navigate("/todo");
    },
  });

  return (
    <div className="form">
      <h1>Login</h1>
      <form className="login-form" onSubmit={formik.handleSubmit}>
        <div className="username">
          <label className="lb-username">User Name</label>
          <input
            className="input-username"
            type="text"
            name="username"
            value={formik.values.username}
            onChange={formik.handleChange}
          />
          {formik.errors.username && formik.touched.username && (
            <p className="requied">{formik.errors.username}</p>
          )}
        </div>
        <div className="password">
          <label className="lb-password">Password</label>
          <input
            className="input-password"
            type="password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
          />
          {formik.errors.password && formik.touched.password && (
            <p className="requied">{formik.errors.password}</p>
          )}
        </div>
        <div className="btn-login">
          <button className="btn-submit" type="submit">
            Login
          </button>
        </div>
        <div className="register-now">
          You not have account?{" "}
          <Link style={{ textDecoration: "none" }} to="/register">
            Register
          </Link>{" "}
          now
        </div>
      </form>
    </div>
  );
};

export default Login;
