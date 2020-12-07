import React from "react";
import { NavLink } from "react-router-dom";
import RandomAvatar from "../RandomAvatar/RandomAvatar";
import FollowUnfollowButton from "./FollowUnfollowButton";
import "./Users.css";

const User = ({user, followingInProgress, follow, unfollow}) => {
  
  return (
    <div className="mb-3 p-2 card text-center userCard" key={user.id}>
      <div className="">
        <div className="card bg-dark userAvatar">
          <NavLink to={"/profile/" + user.id}>
            {user.photos.small 
            ? <img
              className="card-img"
              src={user.photos.small}
              alt="avatar"
            />
            : <RandomAvatar userId={user.id}/>}
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
