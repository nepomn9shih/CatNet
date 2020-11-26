import React from "react";
import { Field, reduxForm } from "redux-form";
import {maxLengthCreator, requiredField } from "../../../utils/validators";
import { Textarea } from "../../FormsControls/FormsControls";

const maxLength30 = maxLengthCreator(30)

const AddPostForm = (props) => {
    
    return (
        <form onSubmit={props.handleSubmit}>
            <div className="input-group">
                <Field 
                    name={"post"}
                    component={Textarea}
                    className="form-control" 
                    validate={[requiredField, maxLength30]}
                    placeholder="Post message"
                />
                <div className="input-group-append">
                    <button className="btn btn-warning">Add post</button>
                </div>
            </div>
        </form>
    )
}

export default reduxForm({form: 'addPost'})(AddPostForm)