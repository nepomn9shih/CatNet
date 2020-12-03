import React from "react";
import settings from '../../images/settings.gif'

const Settings = (props) => {
    return (
      <div className="m-3 text-center text-white">
      <img className="w-50 rounded-circle" src={settings} alt={"settings"}/>
  <h3>Настройки</h3>
  </div>
    )
}

export default Settings