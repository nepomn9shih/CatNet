import React, { useState } from "react";
import ContactsEdit from "./ContactsEdit";
import ContactsNoEdit from "./ContactsNoEdit";

const ProfileContacts = ({ profile, isOwner, saveProfile }) => {
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

  const onSubmit = (formData) => {
    saveProfile(formData)
  }

  return <div>
  {editMode
    ? <ContactsEdit profile={profile} setEditModeOff={setEditModeOff} isOwner={isOwner} toggleContacts={toggleContacts} seeContacts={seeContacts} onSubmit={onSubmit}/>
    : <ContactsNoEdit profile={profile} setEditModeOn={setEditModeOn} isOwner={isOwner} toggleContacts={toggleContacts} seeContacts={seeContacts}/>
  }
  </div>
};

export default ProfileContacts;

