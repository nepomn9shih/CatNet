import React from "react";
import RandomAvatar from "../../../RandomAvatar/RandomAvatar";
import "../../Profile.css";

const Post = ({ message, likeCount = 0, profile}) => {
  if (!message) return null
  return (
    <div className="mb-2 card border-0 bg-dark">
    <div className="d-flex flex-wrap">
        <div className="list-group list-group-horizontal m-1">
          <div className="postAvatar list-group-item p-1">
          {profile.photos.large ? (
                <img
                  className="rounded"
                  src={profile.photos.large}
                  alt="avatar"
                />
              ) : (
                <RandomAvatar userId={profile.userId}/>
              )}
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
