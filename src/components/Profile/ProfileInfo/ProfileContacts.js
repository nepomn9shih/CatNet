import React, { useState } from "react";

const ProfileContacts = ({profile}) => {

const [seeContacts, setSeeContacts] = useState(true);

const toggleContacts = () => {
  setSeeContacts(!seeContacts)
}

return <div className="card bg-light m-2">
              <div className="card-header d-flex justify-content-between align-items-center">
                <h5 >Контакты:</h5>
                <button className="btn btn-sm btn-warning" onClick={toggleContacts}>
                  {seeContacts ? <b>&#9650;</b> : <b>&#9660;</b>}
                </button>
              </div>
              {seeContacts && <div className="card-body">
                <p className="card-text">
                  <b>Facebook:</b>{" "}
                  <a href={profile.contacts.facebook}>
                    {profile.contacts.facebook || "пока нет"}
                  </a>
                </p>
                <p className="card-text">
                  <b>Сайт:</b>{" "}
                  <a href={profile.contacts.website}>
                    {profile.contacts.website || "пока нет"}
                  </a>
                </p>
                <p className="card-text">
                  <b>Вконтакте:</b>{" "}
                  <a href={profile.contacts.vk}>
                    {profile.contacts.vk || "пока нет"}
                  </a>
                </p>
                <p className="card-text">
                  <b>Twitter:</b>{" "}
                  <a href={profile.contacts.twitter}>
                    {profile.contacts.twitter || "пока нет"}
                  </a>
                </p>
                <p className="card-text">
                  <b>Instagram:</b>{" "}
                  <a href={profile.contacts.instagram}>
                    {profile.contacts.instagram || "пока нет"}
                  </a>
                </p>
                <p className="card-text">
                  <b>GitHub:</b>{" "}
                  <a href={profile.contacts.github}>
                    {profile.contacts.github || "пока нет"}
                  </a>
                </p>
                <p className="card-text">
                  <b>YouTube:</b>{" "}
                  <a href={profile.contacts.youtube}>
                    {profile.contacts.youtube || "пока нет"}
                  </a>
                </p>
                <p className="card-text">
                  <b>mainLink:</b>{" "}
                  <a href={profile.contacts.mainLink}>
                    {profile.contacts.mainLink || "пока нет"}
                  </a>
                </p>
              </div>}
            </div>
            
            }

            export default ProfileContacts