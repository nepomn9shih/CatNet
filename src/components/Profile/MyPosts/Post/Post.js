import React from "react";
import classes from "./Post.module.css";

const Post = ({ message = "No message!", likeCount = 0 }) => {
  return (
    <div>
      <img
        className={classes.avatar}
        src="https://images2.minutemediacdn.com/image/upload/c_crop,h_1350,w_2400,x_0,y_303/f_auto,q_auto,w_1100/v1576269707/shape/mentalfloss/610356-gettyimages-1018078858.jpg"
        alt="avatar"
      />
      {message}
      <div><span className={classes.like}>&hearts;{likeCount}</span></div>
    </div>
  );
};

export default Post;
