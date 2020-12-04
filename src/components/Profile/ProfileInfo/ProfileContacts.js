import React, { useState } from "react";

const ProfileContacts = ({ profile, isOwner }) => {
  const [seeContacts, setSeeContacts] = useState(true);

  const toggleContacts = () => {
    setSeeContacts(!seeContacts);
  };

  const [editMode, setEditMode] = useState(false)
  
  const setEditModeOn = () => {
    setEditMode(true)
  }
  const setEditModeOff = () => {
    setEditMode(false)
  }
  
  const Contact = ({ contactTitle, contactValue }) => {
    return (
      <p className="card-text">
        <b>{contactTitle}:</b>{" "}
        <a href={contactValue}>{contactValue || "пока нет"}</a>
      </p>
    );
  };

  const ContactsNoEdit = ({profile, setEditModeOn, isOwner}) => {
  return (
    <div>
      <div className="card bg-light m-2">
      <div className="card-header d-flex justify-content-between align-items-center">
          <h5>Обо мне:</h5>
          {isOwner && <button className="btn btn-sm btn-warning" onClick={setEditModeOn}>
            <b>EDIT</b>
          </button>}
        </div>
        <div className="card-body">
          <p className="card-text">"{profile.aboutMe}"</p>
          <hr />
          <div className="card-text">
            <b>Ищу работу:</b> {profile.lookingForAJob ? "Да" : "Нет"}
          </div>
          {profile.lookingForAJobDescription && (
            <div>{profile.lookingForAJobDescription}</div>
          )}
        </div>
      </div>
      <div className="card bg-light m-2">
        <div className="card-header d-flex justify-content-between align-items-center">
          <h5>Контакты:</h5>
          <button className="btn btn-sm btn-warning" onClick={toggleContacts}>
            {seeContacts ? <b>&#9650;</b> : <b>&#9660;</b>}
          </button>
        </div>
        {seeContacts && (
          <div className="card-body">
            <Contact
              contactTitle={"Facebook"}
              contactValue={profile.contacts.facebook}
            />
            <Contact
              contactTitle={"Сайт"}
              contactValue={profile.contacts.website}
            />
            <Contact
              contactTitle={"Вконтакте"}
              contactValue={profile.contacts.vk}
            />
            <Contact
              contactTitle={"Twitter"}
              contactValue={profile.contacts.twitter}
            />
            <Contact
              contactTitle={"Instagram"}
              contactValue={profile.contacts.instagram}
            />
            <Contact
              contactTitle={"GitHub"}
              contactValue={profile.contacts.github}
            />
            <Contact
              contactTitle={"YouTube"}
              contactValue={profile.contacts.youtube}
            />
            <Contact
              contactTitle={"mainLink"}
              contactValue={profile.contacts.mainLink}
            />
          </div>
        )}
      </div>
    </div>
  );}

  const ContactsEdit = ({profile, setEditModeOff, isOwner}) => {
    return <div>
    <div className="card bg-light m-2">
    <div className="card-header d-flex justify-content-between align-items-center">
        <h5>Обо мне:</h5>
        {isOwner && <button className="btn btn-sm btn-warning" onClick={setEditModeOff}>
          <b>CANCEL</b>
        </button>}
      </div>
      <div className="card-body">
        <p className="card-text">"{profile.aboutMe}"</p>
        <hr />
        <div className="card-text">
          <b>Ищу работу:</b> {profile.lookingForAJob ? "Да" : "Нет"}
        </div>
        {profile.lookingForAJobDescription && (
          <div>{profile.lookingForAJobDescription}</div>
        )}
      </div>
    </div>
    <div className="card bg-light m-2">
      <div className="card-header d-flex justify-content-between align-items-center">
        <h5>Контакты:</h5>
        <button className="btn btn-sm btn-warning" onClick={toggleContacts}>
          {seeContacts ? <b>&#9650;</b> : <b>&#9660;</b>}
        </button>
      </div>
      {seeContacts && (
        <div className="card-body">
          <Contact
            contactTitle={"Facebook"}
            contactValue={profile.contacts.facebook}
          />
          <Contact
            contactTitle={"Сайт"}
            contactValue={profile.contacts.website}
          />
          <Contact
            contactTitle={"Вконтакте"}
            contactValue={profile.contacts.vk}
          />
          <Contact
            contactTitle={"Twitter"}
            contactValue={profile.contacts.twitter}
          />
          <Contact
            contactTitle={"Instagram"}
            contactValue={profile.contacts.instagram}
          />
          <Contact
            contactTitle={"GitHub"}
            contactValue={profile.contacts.github}
          />
          <Contact
            contactTitle={"YouTube"}
            contactValue={profile.contacts.youtube}
          />
          <Contact
            contactTitle={"mainLink"}
            contactValue={profile.contacts.mainLink}
          />
        </div>
      )}
    </div>
  </div>
  }

  return <div>
  {editMode
    ? <ContactsEdit profile={profile} setEditModeOff={setEditModeOff} isOwner={isOwner}/>
    : <ContactsNoEdit profile={profile} setEditModeOn={setEditModeOn} isOwner={isOwner}/>
  }
  </div>
};

export default ProfileContacts;

