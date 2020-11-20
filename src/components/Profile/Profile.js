import React from "react";
import { Redirect } from "react-router-dom";

import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  
  return (
    <div>
      <ProfileInfo profile={props.profile}/>
      <MyPostsContainer 
      store={props.store} 
    />
    </div>
  );
};

export default Profile;
