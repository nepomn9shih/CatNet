import Contact from "./Contact";

const ContactsNoEdit = ({profile, setEditModeOn, isOwner, toggleContacts, seeContacts}) => {
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
              <div className="mt-2">{profile.lookingForAJobDescription}</div>
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
    );
}

export default ContactsNoEdit