const SEND_MESSAGE = "SEND_MESSAGE";

let initialState = {
  dialogs: [
    {
      id: 1,
      name: "Andrey",
      userAvatar:
        "https://www.eastbaytimes.com/wp-content/uploads/2018/10/GettyImages-9015747841.jpg?w=620",
    },
    {
      id: 2,
      name: "Sergey",
      userAvatar:
        "https://d885f4fd1763c7c53b88-b63a7d70fba6d58f32f6d8cf64fba882.ssl.cf1.rackcdn.com/Cats-1518-1.jpg",
    },
    {
      id: 3,
      name: "Ivan",
      userAvatar:
        "https://thumbs.dreamstime.com/b/oosterse-cat-big-ears-op-zwarte-ge%C3%AFsoleerde-achtergrond-96766870.jpg",
    },
    {
      id: 4,
      name: "Masha",
      userAvatar:
        "https://images2.minutemediacdn.com/image/upload/c_crop,h_1350,w_2400,x_0,y_303/f_auto,q_auto,w_1100/v1576269707/shape/mentalfloss/610356-gettyimages-1018078858.jpg",
    },
  ],
  messages: [
    { id: 1, message: "Привет!" },
    { id: 2, message: "Как дела?" },
    { id: 3, message: "Эй!" },
    { id: 4, message: "Чё молчишь?" },
  ],
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
    default:
      return state;
  }
};

export const sendMessageCreator = (newMessageBody) => ({ type: SEND_MESSAGE, newMessageBody });

export default messagesReducer;
