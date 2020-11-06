const SEND_MESSAGE = "SEND_MESSAGE";
const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY";

const messagesReducer = (state, action) => {
    switch (action.type) {
       case UPDATE_NEW_MESSAGE_BODY: 
            state.newMessageBody = action.newMessage;
            return state
        case SEND_MESSAGE: 
            let newMessage = {
              id: state.messages.length + 1,
              message: state.newMessageBody,
            };
            state.messages.push(newMessage);
            state.newMessageBody = '';
            return state
        default: return state
    } 
}

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });

export const updateNewMessageBodyCreator = (message) => ({
  type: UPDATE_NEW_MESSAGE_BODY,
  newMessage: message,
});

export default messagesReducer