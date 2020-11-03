import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import classes from "./Dialogs.module.css";
import Message from "./Message/Message";

const Dialogs = ({dialogsData, messagesData}) => {
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogItems}>
      {dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />)}
      </div>
      <div className={classes.messages}>
      {messagesData.map(message => <Message text={message.message} />)}
      </div>
    </div>
  );
};

export default Dialogs;
