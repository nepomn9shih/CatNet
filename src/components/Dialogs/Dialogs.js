import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import "./Dialogs.css";
import Message from "./Message/Message";
import SendMessageForm from "./SendMessageForm";

const Dialogs = (props) => {
  
  const addNewMessage = (values) => {
    props.sendMessage(values.message)
  }

  return (
    <div className="row">
      <div className="col-4 col-md-3">
        <div className="card bg-dark p-2 m-2">
          {props.messagesPage.dialogs.map((dialog) => (
            <DialogItem
              name={dialog.name}
              id={dialog.id}
              userAvatar={dialog.userAvatar}
              key={dialog.id}
            />
          ))}
          <button className="btn btn-warning btn-sm">***</button>
        </div>
      </div>
      <div className="col">
        <div className="list-group m-2">
          <div className="list-group-item">
            {props.messagesPage.messages.map((message) => (
              <Message text={message.message} key={message.id} />
            ))}
          </div>
          <SendMessageForm 
          onSubmit={addNewMessage}  
          />
        </div>
      </div>
    </div>
  );
};



export default Dialogs;
