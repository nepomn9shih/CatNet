import React from "react";

import MyPosts from "./MyPosts/MyPosts";
import classes from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = ({postsData, addPost, newPostText, updateNewPostText}) => {
  
  return (
    <div>
      <ProfileInfo />
      <MyPosts 
      postsData={postsData} 
      addPost={addPost} 
      newPostText={newPostText} 
      updateNewPostText={updateNewPostText}
    />
    </div>
  );
};

export default Profile;
