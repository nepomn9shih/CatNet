import React from "react";
import { sendMessageCreator, updateNewMessageBodyCreator } from "../../redux/messagesReducer";
import Dialogs from "./Dialogs";

const DialogsContainer = ({store}) => {
  
  let sendMessage = () => {
    store.dispatch(sendMessageCreator())
  }
  
  let updateNewMessageBody = (body) => {
    store.dispatch(updateNewMessageBodyCreator(body))
  }

  return <Dialogs
    messagesPage = {store.getState().messagesPage}
    sendMessage={sendMessage} 
    updateNewMessageBody={updateNewMessageBody}
  />
};

export default DialogsContainer;
