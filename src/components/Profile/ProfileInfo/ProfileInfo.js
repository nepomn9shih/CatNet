import React from "react";
import Preloader from "../../Preloader/Preloader";
import RandomAvatar from "../../RandomAvatar/RandomAvatar";
import "./ProfileInfo.css";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = (props) => {
  
  if (!props.profile) {
    return <Preloader />;
  }

  return (
    <div>
      {/* <img
        className="longPicture"
        src="https://upload.wikimedia.org/wikipedia/commons/9/93/Long_sky_background_%2B_PAN.jpg"
        alt="longPicture"
      /> */}
      <div className="card bg-dark m-3">
        <div className="row no-gutters">
          <div className="col-4">
            <div className="card bg-light m-2">
              <h2 className="card-header text-center">{props.profile.fullName}</h2>
              {props.profile.photos.large ? (
                <img
                  className="card-img"
                  src={props.profile.photos.large}
                  alt="avatar"
                />
              ) : (
                <RandomAvatar />
              )}
            </div>
            <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
            
          </div>
          <div className="col-8">
            <div className="card bg-light m-2">
              <h5 className="card-header">Обо мне:</h5>
              <div className="card-body">
                <p className="card-text">"{props.profile.aboutMe}"</p>
              </div>
            </div>
            <div className="card bg-light m-2">
              <h5 className="card-header">Контакты:</h5>
              <div className="card-body">
                <p className="card-text">
                  <b>Facebook:</b>{" "}
                  <a href={props.profile.contacts.facebook}>
                    {props.profile.contacts.facebook || "пока нет"}
                  </a>
                </p>
                <p className="card-text">
                  <b>Сайт:</b>{" "}
                  <a href={props.profile.contacts.website}>
                    {props.profile.contacts.website || "пока нет"}
                  </a>
                </p>
                <p className="card-text">
                  <b>Вконтакте:</b>{" "}
                  <a href={props.profile.contacts.vk}>
                    {props.profile.contacts.vk || "пока нет"}
                  </a>
                </p>
                <p className="card-text">
                  <b>Twitter:</b>{" "}
                  <a href={props.profile.contacts.twitter}>
                    {props.profile.contacts.twitter || "пока нет"}
                  </a>
                </p>
                <p className="card-text">
                  <b>Instagram:</b>{" "}
                  <a href={props.profile.contacts.instagram}>
                    {props.profile.contacts.instagram || "пока нет"}
                  </a>
                </p>
                <p className="card-text">
                  <b>GitHub:</b>{" "}
                  <a href={props.profile.contacts.github}>
                    {props.profile.contacts.github || "пока нет"}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
