import React from "react";

import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  
  const postsData = [
    {id: 1, message: "Привет!", likeCount: 5}, 
    {id: 2, message: "Как дела?", likeCount: 7},
    {id: 3, message: "Эй!", likeCount: 12},
    {id: 4, message: "Чё молчишь?", likeCount: 6}
  ]

  return (
    <div className={classes.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
      </div>
      <div className={classes.posts}>
      {postsData.map(post => <Post message={post.message} likeCount={post.likeCount}/>)}
      </div>
    </div>
  );
};

export default MyPosts;
