// const { default: profileReducer, addPostActionCreator, deletePostAC } = require("./profileReducer");

// let initialState = {
//   posts: [
//     { id: 1, message: "Привет!", likeCount: 5 },
//     { id: 2, message: "Как дела?", likeCount: 7 },
//     { id: 3, message: "Эй!", likeCount: 12 },
//     { id: 4, message: "Чё молчишь?", likeCount: 6 },
//   ]
// };

// test('length of posts should be incremented', () => {
//   let action = addPostActionCreator("Тестовый пост")
  
//   let newState = profileReducer(initialState, action)

//   expect(newState.posts.length).toBe(5)
//   expect(newState.posts[4].id).toBe(5)
// });

// test('message of new post should be correct', () => {
//   let action = addPostActionCreator("Тестовый пост")
  
//   let newState = profileReducer(initialState, action)

//   expect(newState.posts[4].message).toBe("Тестовый пост")
// });

// test('after deleting length of messages should be decremented', () => {
//   let action = deletePostAC(1)
  
//   let newState = profileReducer(initialState, action)

//   expect(newState.posts.length).toBe(3)
// });
