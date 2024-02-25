import { useFormik } from "formik";
import { Link } from "react-router-dom";
import style from "./style.module.css";
import * as Yup from "yup";
import axios from "axios";
import React, { useState } from "react";

const RegisterPage = () => {
  const [requestResponse, setRequestResponse] = useState({
    textMessage: "",
    alertclass: ""
  });

  const initialValues = {
    firstName: "",
    lastName: "",
    mobile: "",
    email: "",
    password: ""
  };
  const onSubmit = values => {
    axios
      .post(
        "https://orca-app-jhg4l.ondigitalocean.app/api/auth/register",
        values
      )
      .then(
        response => {
          console.log(response);
          setRequestResponse({
            textMessage: response.data.message,
            alertClass: "alert alert-success"
          });
        },
        error => {
          console.log(error);
          setRequestResponse({
            textMessage: error.response.data.message,
            alertClass: "alert alert-danger"
          });
        }
      )
      .catch(error => console.log(error));
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().required("First name is required :"),
    lastName: Yup.string().required("Last name is required :"),
    mobile: Yup.string().required("Mobile number is required"),
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
        <div className="col-md-3"> </div>
        <div className="col-md-6">
          <div className={style.wrapper}>
            <div className={requestResponse.alertClass} role="alert">
              {requestResponse.textMessage}{" "}
            </div>
            <h1>Register</h1>
            <hr />
            <form onSubmit={formik.handleSubmit}>
              <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  value={formik.values.firstName}
                  name="firstName"
                  id="firstName"
                  className={
                    formik.touched.firstName && formik.errors.firstName
                      ? "form-control is-invalid"
                      : "form-control"
                  }
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.firstName && formik.touched.firstName
                  ? <small className="text-danger">
                      {formik.errors.firstName}{" "}
                    </small>
                  : null}
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  value={formik.values.lastName}
                  name="lastName"
                  id="lastName"
                  className={
                    formik.touched.lastName && formik.errors.lastName
                      ? "form-control is-invalid"
                      : "form-control"
                  }
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.lastName && formik.touched.lastName
                  ? <small className="text-danger">
                      {formik.errors.lastName}{" "}
                    </small>
                  : null}
              </div>
              <div className="form-group">
                <label htmlFor="mobile">Mobile</label>
                <input
                  type="tel"
                  value={formik.values.mobile}
                  name="mobile"
                  id="mobile"
                  className={
                    formik.touched.mobile && formik.errors.mobile
                      ? "form-control is-invalid"
                      : "form-control"
                  }
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.mobile && formik.touched.mobile
                  ? <small className="text-danger">
                      {formik.errors.mobile}{" "}
                    </small>
                  : null}
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  value={formik.values.email}
                  name="email"
                  id="email"
                  className={
                    formik.touched.email && formik.errors.email
                      ? "form-control is-invalid"
                      : "form-control"
                  }
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.email && formik.touched.email
                  ? <small className="text-danger">
                      {formik.errors.email}{" "}
                    </small>
                  : null}
              </div>{" "}
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  value={formik.values.password}
                  name="password"
                  id="password"
                  className={
                    formik.touched.password && formik.errors.password
                      ? "form-control is-invalid"
                      : "form-control"
                  }
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.password && formik.touched.password
                  ? <small className="text-danger">
                      {formik.errors.password}{" "}
                    </small>
                  : null}
              </div>
              <input
                type="submit"
                value="Register"
                className="btn btn-primary btn-block"
                disabled={!formik.isValid}
              />
            </form>
            <br />
            <p className="text-center">
              Already register ? <Link to="/login">Click here</Link>
              to Login
            </p>
          </div>

          <div className="col-md-3"> </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
