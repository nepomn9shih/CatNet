import React from "react";

import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = ({postsData}) => {

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
