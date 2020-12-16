import React from "react";
// import Preloader from "../../Preloader/Preloader";
import FollowUnfollowButton from "../../Users/FollowUnfollowButton";
import ProfileAvatarWithName from "./ProfileAvatarWithName";
import ProfileContacts from "./ProfileContacts";

import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = React.memo((props) => {
  console.log("render ProfileInfo")
  // if (!props.profile) {
  //   return <Preloader />;
  // }
  const chosenUser = props.users.filter(user => user.id === props.profile.userId)
  
  return (
    <div>
      <div className="card bg-dark m-3">
        <div className="d-flex flex-wrap">
          <div className="">
            <ProfileAvatarWithName 
              profile={props.profile} 
              isOwner={props.isOwner} 
              savePhoto={props.savePhoto}/>
            <ProfileStatusWithHooks 
              profile={props.profile} 
              isOwner={props.isOwner} 
              status={props.status} 
              updateStatus={props.updateStatus}/>
            {chosenUser[0] 
            ? <div className="mx-2 mb-2">
                <FollowUnfollowButton 
                  user={chosenUser[0]} 
                  followingInProgress={props.followingInProgress} 
                  unfollow={props.unfollow} 
                  follow={props.follow}
                />
              </div>
            : ""}
          </div>
          <div className="flex-grow-1">
          <ProfileContacts profile={props.profile} isOwner={props.isOwner} saveProfile={props.saveProfile}/>
          </div>
        </div>
      </div>
    </div>
  );
});

export default ProfileInfo;
