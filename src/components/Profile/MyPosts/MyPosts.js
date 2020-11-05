import React from "react";

import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = ({postsData, newPostText, dispatch}) => {
console.log(dispatch)  
let newPostElement = React.createRef()

const addNewPost = () => { 
  dispatch({type: "ADD-POST"})
}

const onPostChange = () => {
  let text = newPostElement.current.value
  dispatch({type: "UPDATE-NEW-POST-TEXT", newText: text})
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
