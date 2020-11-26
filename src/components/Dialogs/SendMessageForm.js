import React from "react";
import { Field, reduxForm } from "redux-form";

const SendMessageForm = (props) => {
    
    return (
        <form onSubmit={props.handleSubmit}>
            <div className="list-group-item bg-light">
                <div className="input-group">
                    <Field
                        name={"message"}
                        component={"textarea"}
                        className="form-control"
                        placeholder="Напиши сообщение"
                    />
                    <div className="input-group-append">
                        <button className="btn btn-warning">
                        Add message
                        </button>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default reduxForm({form: 'message'})(SendMessageForm)