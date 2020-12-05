import React from "react";
import Preloader from "../Preloader/Preloader";

import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = React.memo((props) => {
  if (!props.profile) {
    return <Preloader />;
  }
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
      savePhoto={props.savePhoto}
      saveProfile={props.saveProfile}
      />
      <MyPostsContainer 
      store={props.store}
    />
    </div>
  );
});

export default Profile;
