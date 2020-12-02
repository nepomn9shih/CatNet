import React from "react";
import RandomAvatar from "../../RandomAvatar/RandomAvatar";
import "../Profile.css";

const ProfileAvatarWithName = ({profile}) => {
return <div className="card bg-light m-2 profileAvatar">
              <h2 className="card-header text-center">{profile.fullName}</h2>
              {profile.photos.large ? (
                <img
                  className="card-img"
                  src={profile.photos.large}
                  alt="avatar"
                />
              ) : (
                <RandomAvatar />
              )}
            </div>
}

export default ProfileAvatarWithName