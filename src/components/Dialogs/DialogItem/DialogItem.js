import React from "react";
import { NavLink } from "react-router-dom";
import "./DialogItem.css";

const DialogItem = ({ name, id, userAvatar }) => {
  
  return (
    <div className="dialog mb-2">
      <NavLink to={"/dialogs/" + id}>
        <div className="card bg-light">
          <div className="d-flex justify-content-around flex-wrap">
            <div className="">
              <img className="w-100 rounded" src={userAvatar} alt="userAvatar" />
            </div>
            <div className="p-2">
            {name}
            </div>
          </div>
        </div>
      </NavLink>
    </div>
  );
};

export default DialogItem;
