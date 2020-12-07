import React, { useState } from "react";
import ContactsEdit from "./ContactsEdit";
import ContactsNoEdit from "./ContactsNoEdit";

const ProfileContacts = ({ profile, isOwner, saveProfile }) => {
  console.log("render ProfileContacts")

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
    setSaveContactsError(null)
  }

const [saveContactsError, setSaveContactsError] = useState(null)

  const onSubmit = (formData) => {
    saveProfile(formData).then(() => {
      setEditMode(false)
      setSaveContactsError(null)
    })
    .catch((e) => setSaveContactsError(e))
  }

  return <div>
  {editMode
    ? <ContactsEdit initialValues={profile} setEditModeOff={setEditModeOff} onSubmit={onSubmit} saveContactsError={saveContactsError}/>
    : <ContactsNoEdit profile={profile} setEditModeOn={setEditModeOn} isOwner={isOwner} toggleContacts={toggleContacts} seeContacts={seeContacts}/>
  }
  </div>
};

export default ProfileContacts;

