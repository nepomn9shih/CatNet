import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./DialogItem.module.css";

const DialogItem = ({ name, id, userAvatar }) => {
  
  return (
    <div className={classes.dialog}>
      <NavLink to={"/dialogs/" + id}>
        <img src={userAvatar} alt="userAvatar" />
        {name}
      </NavLink>
    </div>
  );
};

export default DialogItem;
