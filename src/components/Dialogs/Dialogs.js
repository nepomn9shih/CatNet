import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import classes from "./Dialogs.module.css";
import Message from "./Message/Message";

const dialogsData = [
  {id: 1, name: "Andrey"}, 
  {id: 2, name: "Sergey"},
  {id: 3, name: "Ivan"},
  {id: 4, name: "Masha"}
]

const messagesData = [
  {id: 1, message: "Привет!"}, 
  {id: 2, message: "Как дела?"},
  {id: 3, message: "Эй!"},
  {id: 4, message: "Чё молчишь?"}
]

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
