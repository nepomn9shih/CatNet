import React, { useState } from "react";
import Preloader from "../../Preloader/Preloader";
import RandomAvatar from "../../RandomAvatar/RandomAvatar";
import "../Profile.css";

const ProfileAvatarWithName = ({ profile, isOwner, savePhoto }) => {
  console.log("render ProfileAvatarWithName")
  const [activeChangeAvatar, setActiveChangeAvatar] = useState(false);

  const toggleChangeAvatar = () => {
    setActiveChangeAvatar(!activeChangeAvatar);
  };

  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0]);
    }
  };

  if (!profile) {
      return <Preloader />;
    }

  return (
    <div className="card bg-light m-2 profileAvatar">
      <h2 className="card-header text-center">{profile.fullName}</h2>
      {profile.photos.large ? (
        <img className="card-img" src={profile.photos.large} alt="avatar" />
      ) : (
        <RandomAvatar userId={profile.userId} />
      )}
      {isOwner && (
        <div>
          <button
            onClick={toggleChangeAvatar}
            className="btn btn-warning btn-block btn-sm"
          >
            <b>{activeChangeAvatar ? "CANCEL" : "CHANGE AVATAR"}</b>
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
