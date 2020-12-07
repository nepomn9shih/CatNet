import React from "react";
import { NavLink } from "react-router-dom";
import RandomAvatar from "../../RandomAvatar/RandomAvatar";
import "./DialogItem.css";

const DialogItem = ({ name, id, setActiveDialog}) => {
  
  return (
    <div className="dialog mb-2">
      <NavLink onClick={setActiveDialog} to={"/dialogs/" + id}>
        <div className="card bg-light">
          <div className="d-flex justify-content-around flex-wrap">
            <div className="">
              <RandomAvatar userId={id}/>
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
