import React from "react";
import "../../Profile.css";

const Post = ({ message, likeCount = 0}) => {
  if (!message) return null
  return (
    <div className="list-group list-group-horizontal mb-2 row">
      <div className="list-group-item bg-dark postAvatar col-3 col-md-1">
      <img
        className="w-100"
        src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/cat-face-by-jonathan-fife.jpg"
        alt="avatar"
      />
      </div>
      <div className="bg-dark d-flex justify-content-center align-items-center like col-3 col-md-1">
        <h5 className="">&hearts;{likeCount}</h5>
      </div>
      <div className="list-group-item d-flex align-items-center overflowHack px-2">
        {message}
      </div>
    </div>
  );
};

export default Post;
