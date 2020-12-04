import React from "react";
import { Field, reduxForm } from "redux-form";
import { maxLengthCreator, requiredField } from "../../utils/validators";
import { Textarea } from "../FormsControls/FormsControls";

const maxLength100 = maxLengthCreator(100)

const SendMessageForm = (props) => {
    
    return (
        <div className="list-group-item bg-light">
            <form onSubmit={props.handleSubmit}>
                <div className="raw">
                    <div className="col-12 col-md-9">
                        <Field
                            name={"message"}
                            component={Textarea}
                            className="form-control"
                            placeholder="Напиши сообщение"
                            validate={[requiredField, maxLength100]}
                        />
                        <div className="mt-1">
                            <button className="btn btn-sm btn-warning btn-block">
                            ADD MESSAGE
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default reduxForm({form: 'message'})(SendMessageForm)