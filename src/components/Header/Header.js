import React from "react";
import classes from './Header.module.css';
import logo from '../../images/logo.png'

const Header = () => {
    return (
        <header className="row">
        <div className="col-2 d-flex align-items-center">
          <img
            className={classes.logo}
            alt="logo"
            src={logo}
          />
        </div>
        <div className="col-10 d-flex justify-content-center align-items-center">
          <h1 className="text-white">Кошачья социальная сеть</h1>
        </div>
      </header>
    )
}

export default Header