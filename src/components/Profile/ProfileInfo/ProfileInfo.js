import React from "react";
import "./ProfileInfo.css";

const ProfileInfo = () => {
  return (
    <div>
      <img
        className="longPicture"
        src="https://upload.wikimedia.org/wikipedia/commons/9/93/Long_sky_background_%2B_PAN.jpg"
        alt="longPicture"
      />
      <div className="card m-3">
        <div className="row no-gutters">
          <div className="col-4">
            <img
              className="card-img"
              src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/cat-face-by-jonathan-fife.jpg"
              alt="avatar"
            />
          </div>
          <div className="col-8">
            <div className="card-body">
            <h4 className="card-title">Обо мне</h4>
            <p className="card-text">Начинающий джаваскриптизер</p>
            </div>
          </div> 
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
