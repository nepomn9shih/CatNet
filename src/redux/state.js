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
  rerenderEntireThree() {
    console.log("State changed!");
  },
  addPost() {
    let newPost = {
      id: store._state.profilePage.posts.length + 1,
      message: store._state.profilePage.newPostText,
      likeCount: 0,
    };
    store._state.profilePage.posts.push(newPost);
    store._state.profilePage.newPostText = "";
    store.rerenderEntireThree();
  },
  updateNewPostText(newText) {
    store._state.profilePage.newPostText = newText;
    store.rerenderEntireThree();
  },
  subscribe(observer) {
    store.rerenderEntireThree = observer;
  },
};

export default store;
