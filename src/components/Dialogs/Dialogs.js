import React, { createRef } from "react";
import DialogItem from "./DialogItem/DialogItem";
import classes from "./Dialogs.module.css";
import Message from "./Message/Message";

const Dialogs = ({dialogsData, messagesData}) => {
  
  let newMessageElement = React.createRef()
  
  const addMessage = () => {
  let text = newMessageElement.current.value
  alert(text)
  newMessageElement.current.value = ''
  }
  
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogItems}>
      {dialogsData.map(dialog => <DialogItem 
      name={dialog.name} 
      id={dialog.id} 
      userAvatar={dialog.userAvatar}/>)}
      </div>
      <div className={classes.messages}>
      {messagesData.map(message => <Message text={message.message} />)}
      <hr />
      <div>
        <div>
          <textarea ref={newMessageElement}></textarea>
        </div>
        <div>
          <button onClick={addMessage}>Add message</button>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Dialogs;
