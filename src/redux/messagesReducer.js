const SEND_MESSAGE = "SEND_MESSAGE";
const SET_ACTIVE_DIALOG = "SET_ACTIVE_DIALOG"

let initialState = {
  dialogs: [
    {
      id: 8,
      name: "Nastya",
      messages: [
        { id: 1, message: "Привет!" },
        { id: 2, message: "Как дела?" },
        { id: 3, message: "Эй!" },
      ]
    },
    {
      id: 2,
      name: "samurai dimych",
      messages: [
        { id: 1, message: "Здарова!" },
        { id: 2, message: "Че делаешь?" },
        { id: 3, message: "Поможешь мне кое с чем?" },
        { id: 4, message: "Чё молчишь?" },
      ]
    },
    {
      id: 11,
      name: "Sol",
        messages: [
          { id: 1, message: "Хай!" },
          { id: 2, message: "Я на связи" },
          { id: 3, message: "Ты где?" },
        ]
    },
    {
      id: 14,
      name: "Den4ik",
        messages: [
          { id: 1, message: "Привет!" },
          { id: 2, message: "Я Маша" },
          { id: 3, message: "А ты?" },
          { id: 4, message: "Ответь!" },
        ]
    },
  ],
  activeDialog: null
};

const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE: {
      let newMessage = {
        id: state.messages.length + 1,
        message: action.newMessageBody,
      };
      return {
        ...state,
        messages: [...state.messages, newMessage]
      };
    }
    case SET_ACTIVE_DIALOG: {
      return {
        ...state,
        activeDialog: action.activeDialogNumber
      };
    }
    default:
      return state;
  }
};

export const sendMessageCreator = (newMessageBody) => ({ type: SEND_MESSAGE, newMessageBody });

export const setActiveDialogAC = (activeDialogNumber) => ({ type: SET_ACTIVE_DIALOG, activeDialogNumber });

export default messagesReducer;
