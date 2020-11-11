import React from "react";
import classes from './Header.module.css';

const Header = () => {
    return (
        <header className="row">
        <div className="col-2 d-flex align-items-center">
          <img
            className={classes.logo}
            alt="logo"
            src="https://erickson.by/images/tild3135-3165-4566-a235-353432643538__38-instagram-3-512.png"
          />
        </div>
        <div className="col-10 d-flex justify-content-center align-items-center">
          <h1 className="text-white">Кошачья социальная сеть</h1>
        </div>
      </header>
    )
}

export default Header