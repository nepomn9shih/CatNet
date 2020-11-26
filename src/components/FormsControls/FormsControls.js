import React from "react";
import './FormsControls.css'

export const Textarea = ({input, meta, ...props}) => {
    
    const hasError = meta.touched && meta.error

    return (
        <div className={"formControl" + (hasError ? " error" : "")}>
            <div>
                <textarea {...props} {...input}/>
            </div>
            {hasError && <span>"{meta.error}"</span>}
        </div>
    )
}