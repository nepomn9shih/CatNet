import React from "react";
import Preloader from "../Preloader/Preloader";
import Paginator from "./Paginator";
import User from "./User";
import "./Users.css";

const Users = ({
  totalUsersCount, pageSize, currentPage, 
  onPageChanged, followingInProgress, 
  follow, unfollow, users, isFetching
}) => {

  let avatarCounter = 0;

  return (
    <div>
      <div className="mx-4 my-2 text-center d-flex justify-content-center align-items-center flex-wrap">
        <Paginator 
          totalUsersCount={totalUsersCount} 
          pageSize={pageSize} 
          currentPage={currentPage} 
          onPageChanged={onPageChanged}
        />
        <div className="card bg-dark text-white mx-4 mt-1 p-1">Users: {totalUsersCount}</div>
      </div>
      {isFetching ? <Preloader /> : null}
      <div className="d-flex flex-wrap justify-content-around p-2">
        {users.map((user) => {
          avatarCounter++;
          if (avatarCounter > 9) avatarCounter = 0;
          return (
            <User 
              user={user} 
              followingInProgress={followingInProgress} 
              follow={follow} 
              unfollow={unfollow}
              avatarCounter={avatarCounter}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Users;

