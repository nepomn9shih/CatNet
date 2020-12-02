import React from "react";

const ProfileContacts = ({profile}) => {
return <div className="card bg-light m-2">
              <h5 className="card-header">Контакты:</h5>
              <div className="card-body">
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
              </div>
            </div>
            }

            export default ProfileContacts