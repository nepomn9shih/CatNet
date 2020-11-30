import React from "react";

const FollowUnfollowButton = ({user, followingInProgress, unfollow, follow }) => {
  return user.followed ? (
    <button
      disabled={followingInProgress.some(id => id === user.id)}
      className="btn btn-block btn-warning"
      onClick={() => {
        unfollow(user.id)
      }}
    >
      Unfollow
    </button>
  ) : (
    <button
     disabled={followingInProgress.some(id => id === user.id)}
      className="btn btn-block btn-success"
      onClick={() => {
        follow(user.id)
      }}
    >
      Follow
    </button>
  )}
export default FollowUnfollowButton;
