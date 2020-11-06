import React from "react";
import { sendMessageCreator, updateNewMessageBodyCreator } from "../../redux/messagesReducer";
import DialogItem from "./DialogItem/DialogItem";
import classes from "./Dialogs.module.css";
import Message from "./Message/Message";

const Dialogs = ({messagesPage, sendMessage, updateNewMessageBody}) => {
  
  let onSendMessageClick = () => {
    sendMessage()
  }
  
  let onNewMessageChange = (e) => {
    let body = e.target.value;
    updateNewMessageBody(body)
  }

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogItems}>
      {messagesPage.dialogs.map(dialog => <DialogItem 
      name={dialog.name} 
      id={dialog.id} 
      userAvatar={dialog.userAvatar}/>)}
      </div>
      <div className={classes.messages}>
      <div>
        {messagesPage.messages.map(message => <Message text={message.message} />)}
      </div>
      <hr />
      <div>
        <div>
          <textarea 
            value={messagesPage.newMessageBody} 
            placeholder="Напиши сообщение" 
            onChange={onNewMessageChange}
          />
        </div>
        <div>
          <button onClick={onSendMessageClick}>Add message</button>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Dialogs;
