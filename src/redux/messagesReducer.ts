import { InitialStateDialogType } from "../types/types";

const SEND_MESSAGE = "messages/SEND_MESSAGE";
const SET_ACTIVE_DIALOG = "messages/SET_ACTIVE_DIALOG"

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
      name: "Dimych",
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
          { id: 2, message: "Я готов" },
          { id: 3, message: "А ты?" },
          { id: 4, message: "Ответь!" },
        ]
    },
  ] as Array<InitialStateDialogType>,
  activeDialog: 8 as number | null,
};

type MessageinitialStateType = typeof initialState

//находим индекс активного диалога
const getIndexOfActiveDialog = (state: MessageinitialStateType) => {
for (let i = 0; i < state.dialogs.length; i++) {
  if (+state.dialogs[i].id === state.activeDialog) return i
}
return -1
}

const messagesReducer = (state = initialState, action: any): MessageinitialStateType => {
  switch (action.type) {
    case SEND_MESSAGE: {
      let newState = JSON.parse(JSON.stringify(state)) //глубокое копирование стейта
      let index = getIndexOfActiveDialog(newState)
      let newMessage = {
        id: state.dialogs[index].messages.length + 1,
        message: action.newMessageBody,
      };
      newState.dialogs[index].messages.push(newMessage)
      return newState
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

type SendMessageType = {
  type: typeof SEND_MESSAGE
  newMessageBody: string
}

//создаем новое сообщение
export const sendMessageCreator = (newMessageBody: string): SendMessageType => ({ type: SEND_MESSAGE, newMessageBody});

type SetActiveDialogType = {
  type: typeof SET_ACTIVE_DIALOG
  activeDialogNumber: number
}

//устанавливаем активный диалог
export const setActiveDialogAC = (activeDialogNumber: number):SetActiveDialogType => ({ type: SET_ACTIVE_DIALOG, activeDialogNumber });

export default messagesReducer;
