import React from "react";
import { Field, reduxForm } from "redux-form";

const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData)
    }
  return (
    <div className="d-flex justify-content-end">
        <div className="m-2 card p-2 text-center">
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    </div>
    
  );
};

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
          <div>
            <Field name={"login"} placeholder={"Login"} component={"input"}/>
          </div>
          <div>
            <Field name={"password"} placeholder={"Password"} component={"input"}/>
          </div>
          <div>
            <Field name={"rememberMe"} type={"checkbox"} component={"input"}/> Remember me
          </div>
          <div>
            <button className="btn btn-warning btn-block">Login</button>
          </div>
        </form>
    );
  };

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

export default Login;
