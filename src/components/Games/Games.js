import React from "react";
import games from '../../images/games.gif'

const Games = (props) => {
    return (
      <div className="container m-3 text-center text-white">
      <img className="w-50 rounded-circle" src={games} alt={"games"}/>
  <h3>Игры</h3>
  </div>
    )
}

export default Games