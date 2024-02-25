import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { useFormik } from "formik";
import style from "./style.module.css";
import * as Yup from "yup";
import { error } from "jquery";
import axios from "axios";


const LoginPage = () => {

    const [requestResponse, setRequestResponse] = useState({
        textMessage:"",
        alertclass:""
    })
  const navigate = useNavigate();
  const handlelogin = () => {
    navigate("/");
  };

  const initialValues = {
    email: "",
    password: ""
  };
  const onSubmit = values => {

    console.log(values)
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .required("Email is required")
      .email("Enter a valid email"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Passsword must be at least 6 characters.")
  });

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,

    validateOnMount: true
  });

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3" />

        <div className="col-md-6">
          <div className={style.wrapper}>
            <h1>Login</h1>

            <hr />
            <form action="" onSubmit={formik.handleSubmit}>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email id"
                  className={
                    formik.touched.email && formik.errors.email
                      ? "form-control is-invalid"
                      : "form-control"
                  }
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  onBlur={formik.handleBlur}
                />

                {formik.errors.email && formik.touched.email
                  ? <small className="text-danger">
                      {formik.errors.email}{" "}
                    </small>
                  : null}
              </div>
              <div className="form-group">
                <label htmlFor="login">Password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter yourPassword"
                  className={
                    formik.touched.password && formik.errors.password
                      ? "form-control is-invalid"
                      : "form-control"
                  }
                  onChange={formik.handleChange}
                  value={formik.values.password}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.password && formik.touched.password
                  ? <small className="text-danger">
                      {formik.errors.password}{" "}
                    </small>
                  : null}
              </div>{" "}
              <input
                onClick={handlelogin}
                type="submit"
                value="Login"
                className="btn btn-primary btn-block"
              />
            </form>
            <br />
            <p className="text-center">
              New User ?{" "}
              <Link to="/register" style={{ color: "red" }}>
                Click here
              </Link>to Register
            </p>
          </div>
          <div className="col-md-3" />
        </div>
      </div>{" "}
    </div>
  );
};

export default LoginPage;
