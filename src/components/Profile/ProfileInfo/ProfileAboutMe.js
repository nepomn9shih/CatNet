import React from "react";

const ProfileAboutMe = ({ profile }) => {
  return (
    <div className="card bg-light m-2">
      <h5 className="card-header">Обо мне:</h5>
      <div className="card-body">
        <p className="card-text">"{profile.aboutMe}"</p>
      <hr/>
      <div className="card-text">
        <b>Ищу работу:</b> {profile.lookingForAJob ? "Да" : "Нет"}
      </div>
      {profile.lookingForAJobDescription && <div>
        {profile.lookingForAJobDescription}
      </div>}
      </div>
    </div>
  );
};

export default ProfileAboutMe;
