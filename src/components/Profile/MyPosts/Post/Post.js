import React from "react";
import classes from "./Post.module.css";

const Post = ({ message = "No message!", likeCount = 0, id }) => {
  return (
    <div>
      <img
        className={classes.avatar}
        src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/cat-face-by-jonathan-fife.jpg"
        alt="avatar"
      />
      <b>{id})</b> {message}
      <div><span className={classes.like}>&hearts;{likeCount}</span></div>
    </div>
  );
};

export default Post;
