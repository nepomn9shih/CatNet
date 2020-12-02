import React from "react";
import about from '../../images/about.gif'

const About = (props) => {
    return (
        <div className="container m-3 text-center text-white">
        <img className="w-50 rounded-circle" src={about} alt={"about"}/>
        <h3>О соцсети</h3>
    </div>
    )
}

export default About