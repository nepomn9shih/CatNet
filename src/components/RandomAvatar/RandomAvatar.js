import React from "react";
import randomAvatar1 from "../../images/randomAvatar1.jpg"
import randomAvatar2 from "../../images/randomAvatar2.jpg"
import randomAvatar3 from "../../images/randomAvatar3.jpg"
import randomAvatar4 from "../../images/randomAvatar4.jpg"
import randomAvatar5 from "../../images/randomAvatar5.jpg"
import randomAvatar6 from "../../images/randomAvatar6.jpg"
import randomAvatar7 from "../../images/randomAvatar7.jpg"
import randomAvatar8 from "../../images/randomAvatar8.jpg"
import randomAvatar9 from "../../images/randomAvatar9.jpg"
import randomAvatar0 from "../../images/randomAvatar0.jpg"

const RandomAvatar = ({userId}) => {
  let temp = String(userId)
  let current = parseInt(temp[temp.length-1])
  
  // let random = current || Math.ceil(Math.random()*10)
  let random = current || "default"
    return (
        <img className="w-100 rounded" src={getRandomAvatar(random)} alt="randomAvatar" />
    )
}

export const getRandomAvatar = (counter) => {
    switch (counter) {
      case 1:
        return randomAvatar1;
      case 2:
        return randomAvatar2;
      case 3:
        return randomAvatar3;
      case 4:
        return randomAvatar4;
      case 5:
        return randomAvatar5;
      case 6:
        return randomAvatar6;
      case 7:
        return randomAvatar7;
      case 8:
        return randomAvatar8;
      case 9:
        return randomAvatar9;
      default:
        return randomAvatar0;
    }
  };

  export default RandomAvatar