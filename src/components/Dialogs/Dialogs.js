import React from "react";
import { sendMessageCreator, updateNewMessageBodyCreator } from "../../redux/state";
import DialogItem from "./DialogItem/DialogItem";
import classes from "./Dialogs.module.css";
import Message from "./Message/Message";

const Dialogs = ({store}) => {
  
  let onSendMessageClick = () => {
    store.dispatch(sendMessageCreator())
  }
  
  let onNewMessageChange = (e) => {
    let body = e.target.value;
    store.dispatch(updateNewMessageBodyCreator(body))
  }

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogItems}>
      {store.getState().messagesPage.dialogs.map(dialog => <DialogItem 
      name={dialog.name} 
      id={dialog.id} 
      userAvatar={dialog.userAvatar}/>)}
      </div>
      <div className={classes.messages}>
      <div>
        {store.getState().messagesPage.messages.map(message => <Message text={message.message} />)}
      </div>
      <hr />
      <div>
        <div>
          <textarea 
            value={store.getState().messagesPage.newMessageBody} 
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
