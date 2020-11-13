import React from "react";
import start from '../../images/start.gif'

const StartPage = () => {
    return (
        <div className="container m-3 text-center text-white">
            <img className="w-50 rounded-circle" src={start} alt={start}/>
        <h3>Добро пожаловать!</h3>
        </div>
    )
}

export default StartPage