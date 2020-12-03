import React from "react";

import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  
  return (
    <div>
      <ProfileInfo 
      profile={props.profile}
      status={props.status}
      updateStatus={props.updateStatus}
      followingInProgress={props.followingInProgress}
      unfollow={props.unfollow}
      follow={props.follow}
      users={props.users}
      authUserId={props.authUserId}
      />
      <MyPostsContainer 
      store={props.store} 
    />
    </div>
  );
};

export default Profile;
