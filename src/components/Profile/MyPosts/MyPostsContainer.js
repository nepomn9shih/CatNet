import React from "react";

import {addPostActionCreator, updateNewPostActionCreator} from '../../../redux/profileReducer'
import MyPosts from "./MyPosts";

const MyPostsContainer = ({store}) => {
 
const addNewPost = () => { 
 let action = addPostActionCreator()
  store.dispatch(action)
}

const onPostChange = (text) => {
  let action = updateNewPostActionCreator(text)
  store.dispatch(action)
}

  return (
   <MyPosts 
    postsData={store.getState().profilePage.posts} 
    newPostText={store.getState().profilePage.newPostText} 
    addPost={addNewPost} 
    updateNewPostText={onPostChange} 
   />
  );
};

export default MyPostsContainer;
