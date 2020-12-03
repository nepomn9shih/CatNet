import React from "react";
import "../../Profile.css";

const Post = ({ message, likeCount = 0}) => {
  if (!message) return null
  return (
    <div className="mb-2 card border-0 bg-dark">
    <div className="d-flex flex-wrap">
        <div className="list-group list-group-horizontal m-1">
          <div className="postAvatar list-group-item p-1">
            <img
              className="rounded"
              src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/cat-face-by-jonathan-fife.jpg"
              alt="avatar"
            />
          </div>
          <div className="d-flex justify-content-center align-items-center list-group-item p-0 like">
            <span className="p-2"><b>&hearts;{likeCount}</b></span>
          </div>
        </div>
      <div className="card overflowHack flex-grow-1 m-1 p-2">
        {message}
      </div>
    </div>
    </div>
  );
};

export default Post;
