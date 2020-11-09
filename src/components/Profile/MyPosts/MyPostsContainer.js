import React from "react";
import { connect } from "react-redux";

import {addPostActionCreator, updateNewPostActionCreator} from '../../../redux/profileReducer'
import MyPosts from "./MyPosts";

const mapStateToProps = (state) => {
  return {
    postsData: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
  }
}

const mapsDispatchToProps = (dispatch) => {
  return {
    addPost: () => {dispatch(addPostActionCreator())},
    updateNewPostText: (text) => {dispatch(updateNewPostActionCreator(text))}
  }
}

const MyPostsContainer = connect(mapStateToProps, mapsDispatchToProps)(MyPosts)

export default MyPostsContainer;
