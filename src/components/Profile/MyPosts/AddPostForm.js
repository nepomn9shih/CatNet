import React from "react";
import { Field, reduxForm } from "redux-form";
import { maxLengthCreator, requiredField } from "../../../utils/validators";
import { Textarea } from "../../FormsControls/FormsControls";

const maxLength100 = maxLengthCreator(100);

const AddPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className="raw">
      <div className="col-12 col-md-7">
        <Field
            name={"post"}
            component={Textarea}
            className="form-control"
            validate={[requiredField, maxLength100]}
            placeholder="Post message"
        />
        <div className="mt-1">
            <button className="btn btn-sm btn-warning btn-block"><b>ADD POST</b></button>
        </div>
      </div>
      </div>
    </form>
  );
};

export default reduxForm({ form: "addPost" })(AddPostForm);
