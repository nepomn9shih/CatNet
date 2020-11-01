import React from "react";
import classes from './Header.module.css';

const Header = () => {
    return (
        <header className={classes.header}>
        <img
          className={classes.logo}
          alt="logo"
          src="https://erickson.by/images/tild3135-3165-4566-a235-353432643538__38-instagram-3-512.png"
        />
      </header>
    )
}

export default Header