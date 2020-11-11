import React from "react";
import "./Message.css";

const Message = ({ text }) => {
  return <div className="m-1 overflowHack">{text}</div>;
};

export default Message;
