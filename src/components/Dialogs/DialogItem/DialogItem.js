import React from "react";
import { NavLink } from "react-router-dom";
import "./DialogItem.css";

const DialogItem = ({ name, id, userAvatar }) => {
  
  return (
    <div className="dialog mb-2">
      <NavLink to={"/dialogs/" + id}>
        <div className="row">
          <div className="col-4">
            <img src={userAvatar} alt="userAvatar" />
          </div>
          <div className="col p-2">
          {name}
          </div>
        </div>
      </NavLink>
    </div>
  );
};

export default DialogItem;
