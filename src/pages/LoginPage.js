import React from "react";
import "./style.css";

import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";

const LoginPage = (props) => {
  const loginPageStyle = {
    margin: "32px auto 37px",
    maxWidth: "400px",
    background: "#fff",
    padding: "30px",
    borderRadius: "10px",
    boxShadow: "0px 0px 10px 10px rgba(0,0,0,0.15)",
  };

  const { touched, errors } = props;
  return (
    <React.Fragment>
      <div className="container">
        <div className="login-wrapper" style={loginPageStyle}>
          <h2>Inicio de sesión</h2>
          <Form className="form-container">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <Field
                type="text"
                name="email"
                className={"form-control"}
                placeholder="example@email.com"
                
              />
              {touched.email && errors.email && (
                <span className="help-block text-danger">{errors.email}</span>
              )}
            </div>
            <div className="form-group mt-2">
              <label htmlFor="password">Password</label>
              <Field
                type="password"
                name="password"
                className={"form-control"}
                placeholder="Password"
                
              />
              {touched.password && errors.password && (
                <span className="help-block text-danger">
                  {errors.password}
                </span>
              )}
            </div>
            
            <button type="submit" className="btn btn-primary mt-3" >
              Ingresar
            </button>
          </Form>
        </div>
      </div>
    </React.Fragment>
  );
};

const LoginFormik = withFormik({
  mapPropsToValues: (props) => {
    return {
      email: props.email || "",
      password: props.password || "",
    };
  },

  validationSchema: Yup.object().shape({
    email: Yup.string().email("Email not valid").required("Email is required"),
    password: Yup.string().required("Password is required"),
  }),

  handleSubmit: (values) => {
    const REST_API_URL = "http://127.0.0.1:8000/usuario/usuario/?format=json";
    
  
    



    fetch(REST_API_URL, {
      method: 'post',
      body: JSON.stringify(values)
      
    }).then(response=> {
      if (response.ok) {
        return response.json();
      } else {
        // HANDLE ERROR
        throw new Error('Something went wrong');
      }
    }).then(data => {
      // HANDLE RESPONSE DATA
      console.log(data);
    }).catch((error) => {
      // HANDLE ERROR
      console.log(error);
    });
  },
})(LoginPage);

export default LoginFormik;
