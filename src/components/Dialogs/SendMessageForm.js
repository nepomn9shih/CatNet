import React from "react";
import { Field, reduxForm } from "redux-form";
import { maxLengthCreator, requiredField } from "../../utils/validators";
import { Textarea } from "../FormsControls/FormsControls";

const maxLength100 = maxLengthCreator(100)

const SendMessageForm = (props) => {
    
    return (
        <div className="list-group-item bg-light">
            <form onSubmit={props.handleSubmit}>
                <div className="input-group">
                    <Field
                        name={"message"}
                        component={Textarea}
                        className="form-control"
                        placeholder="Напиши сообщение"
                        validate={[requiredField, maxLength100]}
                    />
                    <div className="input-group-append">
                        <button className="btn btn-warning">
                        Add message
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default reduxForm({form: 'message'})(SendMessageForm)