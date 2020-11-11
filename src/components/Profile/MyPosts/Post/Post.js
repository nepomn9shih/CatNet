import React from "react";
import "./Post.css";

const Post = ({ message = "No message!", likeCount = 0, id }) => {
  return (
    <div className="list-group list-group-horizontal mb-2">
      <div className="list-group-item bg-dark postAvatar">
      <img
        className="postAvatarImg"
        src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/cat-face-by-jonathan-fife.jpg"
        alt="avatar"
      />
      </div>
      <div className="list-group-item bg-dark d-flex justify-content-center align-items-center like">
        <h4 className="">&hearts;{likeCount}</h4>
      </div>
      <div className="list-group-item d-flex justify-content-center align-items-center overflowHack">
        {id}) {message}
      </div>
    </div>
  );
};

export default Post;
