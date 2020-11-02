import React from "react";
import classes from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div>
      <img
        className={classes.longpic}
        src="https://upload.wikimedia.org/wikipedia/commons/9/93/Long_sky_background_%2B_PAN.jpg"
        alt="longpic"
      />
      <div className={classes.description}>
        <img
          className={classes.avatar}
          src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/cat-face-by-jonathan-fife.jpg"
          alt="avatar"
        />
        <div>
        description
        </div> 
      </div>
    </div>
  );
};

export default ProfileInfo;
