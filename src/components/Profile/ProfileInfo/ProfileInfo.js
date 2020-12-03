import React from "react";
import Preloader from "../../Preloader/Preloader";
import FollowUnfollowButton from "../../Users/FollowUnfollowButton";
import ProfileAboutMe from "./ProfileAboutMe";
import ProfileAvatarWithName from "./ProfileAvatarWithName";
import ProfileContacts from "./ProfileContacts";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = (props) => {
  
  if (!props.profile) {
    return <Preloader />;
  }
  const chosenUser = props.users.filter(user => user.id === props.profile.userId)
  
  return (
    <div>
      <div className="card bg-dark m-3">
        <div className="d-flex flex-wrap">
          <div className="">
            <ProfileAvatarWithName profile={props.profile} authUserId={props.authUserId} savePhoto={props.savePhoto}/>
            <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
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
            <ProfileAboutMe profile={props.profile}/>
            <ProfileContacts profile={props.profile}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
