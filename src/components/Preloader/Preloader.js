import React from "react";
import loading from "../../images/loading.gif"

const Preloader = () => {
    return (
        <img className="w-25 p-2" src={loading} alt="loading"/>
    )
}

export default Preloader