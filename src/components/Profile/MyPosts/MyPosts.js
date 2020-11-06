import React from "react";

import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostActionCreator} from '../../../redux/profileReducer'

const MyPosts = ({postsData, newPostText, dispatch}) => {
console.log(dispatch)  
let newPostElement = React.createRef()

const addNewPost = () => { 
  dispatch(addPostActionCreator())
}

const onPostChange = () => {
  let text = newPostElement.current.value
  dispatch(updateNewPostActionCreator(text))
}

  return (
    <div className={classes.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea ref={newPostElement} onChange={onPostChange} value={newPostText}/>
        </div>
        <div>
          <button onClick={addNewPost}>Add post</button>
        </div>
      </div>
      <hr />
      <div className={classes.posts}>
      {postsData.map(post => <Post message={post.message} likeCount={post.likeCount} id={post.id}/>)}
      </div>
    </div>
  );
};

export default MyPosts;
