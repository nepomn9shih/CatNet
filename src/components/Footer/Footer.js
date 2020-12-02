import React from "react";
import './Footer.css';
import { NavLink } from "react-router-dom";

const Footer = (props) => {
    return (
        <footer className="row d-flex justify-content-center align-items-center">
            <small className="item text-white text-center">Made by <NavLink to='/profile/12627'>Непомнящих Александр</NavLink> in 2020</small>
        </footer>
    )
}

export default Footer