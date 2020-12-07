import React from "react";
import { Route } from "react-router-dom";
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
          {props.messagesPage.dialogs.map((dialog) => {
            
            return <DialogItem
              name={dialog.name}
              id={dialog.id}
              key={dialog.id}
              setActiveDialog={props.setActiveDialog}
              activeDialog={props.messagesPage.activeDialog}
            />}
          )}
          <button className="btn btn-warning btn-sm">***</button>
        </div>
      </div>
      <div className="col">
        <Route path="/dialogs/:dialogId"
            render={ () => {
              let userId = props.match.params.dialogId
              let currentUserMessages = props.messagesPage.dialogs.filter((dialog) => {return +dialog.id === +userId})
              return <div className="list-group m-2">
                <div className="list-group-item text-center bg-light">
                  <b>{currentUserMessages[0].name}</b>
                </div>
                <div className="list-group-item">
                  {currentUserMessages[0].messages.map((message) => (
                    <Message text={message.message} key={message.id} />
                  ))}
                </div>
                <SendMessageForm 
                  onSubmit={addNewMessage}  
                />
              </div>
            }
          }
        />
      </div>
    </div>
  );
};



export default Dialogs;
