const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Привет!", likeCount: 5 },
        { id: 2, message: "Как дела?", likeCount: 7 },
        { id: 3, message: "Эй!", likeCount: 12 },
        { id: 4, message: "Чё молчишь?", likeCount: 6 },
      ],
      newPostText: "",
    },
    messagesPage: {
      dialogs: [
        {
          id: 1,
          name: "Andrey",
          userAvatar:
            "https://www.eastbaytimes.com/wp-content/uploads/2018/10/GettyImages-9015747841.jpg?w=620",
          messages: [
            { id: 1, message: "Привет!" },
            { id: 2, message: "Как дела?" },
            { id: 3, message: "Эй!" },
            { id: 4, message: "Чё молчишь?" },
          ],
        },
        {
          id: 2,
          name: "Sergey",
          userAvatar:
            "https://d885f4fd1763c7c53b88-b63a7d70fba6d58f32f6d8cf64fba882.ssl.cf1.rackcdn.com/Cats-1518-1.jpg",
          messages: [
            { id: 1, message: "Привет!" },
            { id: 2, message: "Как дела?" },
            { id: 3, message: "Эй!" },
            { id: 4, message: "Чё молчишь?" },
          ],
        },
        {
          id: 3,
          name: "Ivan",
          userAvatar:
            "https://thumbs.dreamstime.com/b/oosterse-cat-big-ears-op-zwarte-ge%C3%AFsoleerde-achtergrond-96766870.jpg",
          messages: [
            { id: 1, message: "Привет!" },
            { id: 2, message: "Как дела?" },
            { id: 3, message: "Эй!" },
            { id: 4, message: "Чё молчишь?" },
          ],
        },
        {
          id: 4,
          name: "Masha",
          userAvatar:
            "https://images2.minutemediacdn.com/image/upload/c_crop,h_1350,w_2400,x_0,y_303/f_auto,q_auto,w_1100/v1576269707/shape/mentalfloss/610356-gettyimages-1018078858.jpg",
          messages: [
            { id: 1, message: "Привет!" },
            { id: 2, message: "Как дела?" },
            { id: 3, message: "Эй!" },
            { id: 4, message: "Чё молчишь?" },
          ],
        },
      ],
    },
  },
  getState() {
    return this._state;
  },
  _callSubscriber() {
    console.log("State changed!");
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    if (action.type === ADD_POST) {
      let newPost = {
        id: this._state.profilePage.posts.length + 1,
        message: this._state.profilePage.newPostText,
        likeCount: 0,
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = "";
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    }
  },
};

export const addPostActionCreator = () => ({ type: ADD_POST });

export const updateNewPostActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});

export default store;