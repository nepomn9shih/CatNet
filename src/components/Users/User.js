import React from "react";
import { NavLink } from "react-router-dom";
import { getRandomAvatar } from "../RandomAvatar/RandomAvatar";
import FollowUnfollowButton from "./FollowUnfollowButton";
import "./Users.css";

const User = ({user, followingInProgress, follow, unfollow, avatarCounter}) => {
  
  return (
    <div className="mb-3 p-2 card text-center" key={user.id}>
      <div className="">
        <div className="card bg-dark">
          <NavLink to={"/profile/" + user.id}>
            <img
              className="card-img userAvatar"
              src={user.photos.small || getRandomAvatar(avatarCounter)}
              alt="avatar"
            />
          </NavLink>
          <div className="d-flex justify-content-between">
            <span className="badge text-white p-3">ID: {user.id}</span>
            <div className="m-1">
              <FollowUnfollowButton
                user={user}
                followingInProgress={followingInProgress}
                unfollow={unfollow}
                follow={follow}
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <h5 className="card-header">{user.name}</h5>
        <div className="p-1">"{user.status || "Chilling"}"</div>
      </div>
    </div>
  );
};

export default User;
