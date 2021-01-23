import React from "react";
import { UsersType } from "../../types/types";

type FollowUnfollowButtonPropsType = {
  user: UsersType
  followingInProgress: any
  unfollow: (id: number) => void
  follow: (id: number) => void
}

const FollowUnfollowButton: React.FC<FollowUnfollowButtonPropsType> = ({user, followingInProgress, unfollow, follow }) => {
  
  return user.followed ? (
    <button
      disabled={followingInProgress.some((id: number) => id === user.id)}
      className="btn btn-block btn-warning"
      onClick={() => {
        unfollow(user.id)
      }}
    >
      Unfollow
    </button>
  ) : (
    <button
     disabled={followingInProgress.some((id: number) => id === user.id)}
      className="btn btn-block btn-success"
      onClick={() => {
        follow(user.id)
      }}
    >
      Follow
    </button>
  )}
export default FollowUnfollowButton;
