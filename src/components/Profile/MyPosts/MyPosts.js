import React from "react";

import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = ({postsData, addPost}) => {
  
let newPostElement = React.createRef()

const addNewPost = () => { 
  let text = newPostElement.current.value
  addPost(text)
  newPostElement.current.value = ''
}

  return (
    <div className={classes.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea ref={newPostElement}></textarea>
        </div>
        <div>
          <button onClick={addNewPost}>Add post</button>
        </div>
      </div>
      <hr />
      <div className={classes.posts}>
      {postsData.map(post => <Post message={post.message} likeCount={post.likeCount}/>)}
      </div>
    </div>
  );
};

export default MyPosts;
