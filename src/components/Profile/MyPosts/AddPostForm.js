import React from "react";
import { Field, reduxForm } from "redux-form";

const AddPostForm = (props) => {
    
    return (
        <form onSubmit={props.handleSubmit}>
            <div className="input-group">
                <Field 
                    name={"post"}
                    component={"textarea"}
                    className="form-control" 
                />
                <div className="input-group-append">
                    <button className="btn btn-warning">Add post</button>
                </div>
            </div>
        </form>
    )
}

export default reduxForm({form: 'addPost'})(AddPostForm)