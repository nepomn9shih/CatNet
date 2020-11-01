import React from "react";

import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  const message1 = "Привет!"
  const message2 = "Как дела?"
  return (
    <div>
      My posts
      <div>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <div className={classes.posts}>
        <Post message={message1}/>
        <Post message={message2}/>
      </div>
    </div>
  );
};

export default MyPosts;
