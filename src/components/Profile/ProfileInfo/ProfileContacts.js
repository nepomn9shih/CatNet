import React, { useState } from "react";
import ContactsEdit from "./ContactsEdit";
import ContactsNoEdit from "./ContactsNoEdit";

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
  
  return <div>
  {editMode
    ? <ContactsEdit profile={profile} setEditModeOff={setEditModeOff} isOwner={isOwner} toggleContacts={toggleContacts} seeContacts={seeContacts}/>
    : <ContactsNoEdit profile={profile} setEditModeOn={setEditModeOn} isOwner={isOwner} toggleContacts={toggleContacts} seeContacts={seeContacts}/>
  }
  </div>
};

export default ProfileContacts;

