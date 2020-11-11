import React from "react";
import { NavLink } from "react-router-dom";
import store from "../../redux/reduxStore";
import classes from './Navbar.module.css';

const Navbar = () => {
    return (
      <nav className="p-3">
      <div className={classes.item}>
        <NavLink to="/profile" activeClassName={classes.active}>Profile</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="/dialogs" activeClassName={classes.active}>
          Messages <span className="badge badge-light">{store.getState().messagesPage.messages.length}</span>
        </NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="/news" activeClassName={classes.active}>News</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="/music" activeClassName={classes.active}>Music</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="/settings" activeClassName={classes.active}>Settings</NavLink>
      </div>
      <hr />
      <div className={classes.item}>
        <NavLink to="/users" activeClassName={classes.active}>Users</NavLink>
      </div>
    </nav>
    )
}

export default Navbar