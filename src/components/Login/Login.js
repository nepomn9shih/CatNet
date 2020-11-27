import React from "react";
import { Field, reduxForm } from "redux-form";
import { maxLengthCreator, requiredField, minLengthCreator } from "../../utils/validators";
import { Input } from "../FormsControls/FormsControls";

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

const maxLength20 = maxLengthCreator(20)
const minLength8 = minLengthCreator(8)

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
          <div>
            <Field 
              name={"login"} 
              placeholder={"Login"} 
              component={Input}
              validate={[requiredField, maxLength20]}
              />
          </div>
          <div>
            <Field 
              name={"password"} 
              placeholder={"Password"} 
              component={Input}
              validate={[requiredField, maxLength20, minLength8]}
              />
          </div>
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
