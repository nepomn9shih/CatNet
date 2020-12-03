import React, { useState } from "react";
import RandomAvatar from "../../RandomAvatar/RandomAvatar";
import "../Profile.css";

const ProfileAvatarWithName = ({ profile, authUserId, savePhoto }) => {
  const [activeChangeAvatar, setActiveChangeAvatar] = useState(false);

  const toggleChangeAvatar = () => {
    setActiveChangeAvatar(!activeChangeAvatar);
  };

  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0]);
    }
  };

  return (
    <div className="card bg-light m-2 profileAvatar">
      <h2 className="card-header text-center">{profile.fullName}</h2>
      {profile.photos.large ? (
        <img className="card-img" src={profile.photos.large} alt="avatar" />
      ) : (
        <RandomAvatar userId={profile.userId} />
      )}
      {authUserId === profile.userId && (
        <div>
          <button
            onClick={toggleChangeAvatar}
            className="btn btn-warning btn-block btn-sm"
          >
            {activeChangeAvatar ? "Cancel" : "Change avatar"}
          </button>
          {activeChangeAvatar && (
            <input
              className="btn btn-sm btn-block btn-light"
              type="file"
              onChange={onMainPhotoSelected}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default ProfileAvatarWithName;
