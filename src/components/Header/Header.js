import React from "react";
import './Header.css';
import logo from '../../images/logo.png'
import { NavLink } from "react-router-dom";

const Header = (props) => {
    return (
        <header className="row">
        <div className="col-3 d-flex align-items-center">
          <img
            className="logo"
            alt="logo"
            src={logo}
          />
        </div>
        <div className="col-6 d-flex justify-content-center align-items-center">
          <h1 className="text-white">CatNet</h1>
        </div>
        <div className="col-3 d-flex justify-content-end align-items-center link pr-3">
        {props.isAuth 
        ? <div>{props.login} <button onClick={props.logoutThunkCreator} className="btn btn-warning btn-sm">Log out</button></div> 
        : <NavLink to='/login'><button className="btn btn-warning btn-sm">Log in</button></NavLink>}
        </div>
      </header>
    )
}

export default Header