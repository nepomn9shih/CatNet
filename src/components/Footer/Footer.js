import React from "react";
import './Footer.css';
import { NavLink } from "react-router-dom";

const Footer = (props) => {
    return (
        <footer className="row d-flex justify-content-center align-items-center">
            <div className="item text-white">Разработано <NavLink to='/profile/12627'>Непомнящих Александром</NavLink> в суровом 2020<NavLink to='/profile/12627'></NavLink></div>
        </footer>
    )
}

export default Footer