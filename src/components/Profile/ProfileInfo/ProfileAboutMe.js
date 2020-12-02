import React from "react";

const ProfileAboutMe = ({ profile }) => {
  return (
    <div className="card bg-light m-2">
      <h5 className="card-header">Обо мне:</h5>
      <div className="card-body">
        <p className="card-text">"{profile.aboutMe}"</p>
      </div>
    </div>
  );
};

export default ProfileAboutMe;
