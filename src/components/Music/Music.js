import React from "react";
import music from '../../images/music.gif'

const Music = (props) => {
    return (
      <div className="container m-3 text-center text-white">
      <img className="w-50 rounded-circle" src={music} alt={"music"}/>
  <h3>Музыка</h3>
  </div>
    )
}
export default Music