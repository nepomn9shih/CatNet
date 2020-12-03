import React from "react";
import { Redirect } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import { maxLengthCreator, requiredField, minLengthCreator } from "../../utils/validators";
import { Input } from "../FormsControls/FormsControls";

const Login = ({loginThunkCreator, isAuth}) => {

  const onSubmit = (formData) => {
    loginThunkCreator(formData.email, formData.password, formData.rememberMe)
  }

  if (isAuth) {
    return <Redirect to={"/profile"} />
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

const maxLength20 = maxLengthCreator(20)
const minLength4 = minLengthCreator(4)

const LoginForm = ({handleSubmit, error}) => {
    return (
        <form onSubmit={handleSubmit}>
          <div>
            <Field 
              name={"email"} 
              placeholder={"Email"} 
              component={Input}
              validate={[requiredField, maxLength20]}
              />
          </div>
          <div>
            <Field 
              name={"password"} 
              type={"password"} 
              placeholder={"Password"} 
              component={Input}
              validate={[requiredField, maxLength20, minLength4]}
              />
          </div>
          {error && <div className="formSummaryError">{error}</div>}
          <div>
            <Field name={"rememberMe"} type={"checkbox"} component={Input}/> Remember me
          </div>
          <div>
            <button className="btn btn-warning btn-block">Login</button>
          </div>
        </form>
    );
  };

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

export default Login;
