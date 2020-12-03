
import { connect } from "react-redux";

import {addPostActionCreator} from '../../../redux/profileReducer'
import MyPosts from "./MyPosts";

const mapStateToProps = (state) => {
  return {
    postsData: state.profilePage.posts,
    profile: state.profilePage.profile,
  }
}

const mapsDispatchToProps = (dispatch) => {
  return {
    addPost: (newPostText) => {dispatch(addPostActionCreator(newPostText))},
  }
}

const MyPostsContainer = connect(mapStateToProps, mapsDispatchToProps)(MyPosts)

export default MyPostsContainer;
