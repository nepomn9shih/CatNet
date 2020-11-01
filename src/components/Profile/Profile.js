import React from "react";

import MyPosts from "./MyPosts/MyPosts";
import classes from './Profile.module.css';

const Content = () => {
    return (
      <div className={classes.content}>
        <img
          className={classes.longpic}
          src="https://upload.wikimedia.org/wikipedia/commons/9/93/Long_sky_background_%2B_PAN.jpg"
          alt="longpic"
        />
        <div>
          <img
            className={classes.avatar}
            src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/cat-face-by-jonathan-fife.jpg"
            alt="avatar"
          />
        </div>
        description
        <MyPosts />
      </div>
    )
}

export default Content