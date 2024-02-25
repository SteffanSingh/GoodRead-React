import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { ErrorMessage, Field, Form, Formik, useFormik } from "formik";
import style from "./style.module.css";
import * as Yup from "yup";
import axios from "axios";
import Navbar from "../../Components/NavBar";

const Login = () => {
  const [requestResponse, setRequestResponse] = useState({
    textMessage: "",
    alertclass: ""
  });
  const navigate = useNavigate();

  const initialValues = {
    email: "",
    password: ""
  };
  const onSubmit = values => {
    axios
      .post("https://orca-app-jhg4l.ondigitalocean.app/api/auth/login", values)
      .then(
       (response )=> {
          localStorage.setItem("token",response.data.token);
          localStorage.setItem("user", JSON.stringify(response));
          setRequestResponse({
            textMessage: "login success, than you",
            alertclass: "alert alert-success"
          });
          navigate("/")
        },
        error => {
          setRequestResponse({
            textMessage: error.response.data.message,
            alertclass: "alert alert-danger"
          });
        }
      )
      .catch(error => console.log(error));
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .required("Email is required")
      .email("Enter a valid email"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Passsword must be at least 6 characters.")
  });

  return (
    <><Navbar/>
    <div className="container">
      <div className="row">
        <div className="col-md-3" />
        <div className="col-md-6">
          <div className={style.wrapper}>
            <div className={requestResponse.alertclass} role="alert">
              {requestResponse.textMessage}{" "}
            </div>
            <h2>Log in</h2>
            <hr />
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
              validateOnMount
            >
              {formik => {
                return (
                  <Form action="">
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <Field
                        type="email"
                        name="email"
                        className={
                          formik.touched.email && formik.errors.email
                            ? "form-control is-invalid"
                            : "form-control"
                        }
                      />
                      <ErrorMessage name="email">
                        {errorMessage =>
                          <small className="text-danger">
                            {errorMessage}{" "}
                          </small>}
                      </ErrorMessage>
                    </div>

                    <div className="form-group">
                      <label htmlFor="password">Password</label>
                      <Field
                        type="password"
                        name="password"
                        className={
                          formik.touched.password && formik.errors.password
                            ? "form-control is-invalid"
                            : "form-control"
                        }
                      />
                      <ErrorMessage name="password">
                        S
                        {errorMessage =>
                          <small className="text-danger">
                            {errorMessage}{" "}
                          </small>}
                      </ErrorMessage>
                    </div>

                    <input
                      type="submit"
                      value="login"
                      className="btn btn-primary btn-block"
                      disabled={!formik.isValid}
                    />
                  </Form>
                );
              }}
            </Formik>

            <br />

            <p className="text-center">
              New user <Link to="/register">Click here</Link>
            </p>
          </div>
        </div>

        <div className="col-md-3" />
      </div>
    </div></>
  );
};

export default Login;
