import React from "react";
import { NavLink } from "react-router-dom";
import RandomAvatar from "../../RandomAvatar/RandomAvatar";
import "./DialogItem.css";

const DialogItem = ({ name, id, setActiveDialog, activeDialog}) => {
  
  return (
    <div className="dialog mb-2">
      <NavLink onClick={() => {setActiveDialog(id)}} to={"/dialogs/" + id}>
        <div className={(+activeDialog === +id) ? "card bg-light" :"card bg-secondary"}>
          <div className="d-flex justify-content-around flex-wrap">
            <div className="p-1">
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
