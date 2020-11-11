import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import "./Dialogs.css";
import Message from "./Message/Message";

const Dialogs = ({ messagesPage, sendMessage, updateNewMessageBody }) => {
  let onSendMessageClick = () => {
    sendMessage();
  };

  let onNewMessageChange = (e) => {
    let body = e.target.value;
    updateNewMessageBody(body);
  };

  return (
    <div className="row">
      <div className="col-3">
        <div className="card bg-dark p-2 m-3">
          {messagesPage.dialogs.map((dialog) => (
            <DialogItem
              name={dialog.name}
              id={dialog.id}
              userAvatar={dialog.userAvatar}
              key={dialog.id}
            />
          ))}
        </div>
      </div>
      <div className="col-9">
        <div className="list-group m-3">
          <div className="list-group-item">
            {messagesPage.messages.map((message) => (
              <Message text={message.message} key={message.id} />
            ))}
          </div>
          <div className="list-group-item bg-light">
          <div className="input-group">
            <textarea
              className="form-control"
              value={messagesPage.newMessageBody}
              placeholder="Напиши сообщение"
              onChange={onNewMessageChange}
            />
            <div className="input-group-append">
              <button className="btn btn-warning" onClick={onSendMessageClick}>
                Add message
              </button>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
