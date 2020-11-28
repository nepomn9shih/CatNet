import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import classes from './Navbar.module.css';

const Navbar = (props) => {
    return (
      <nav className="p-3">
      <div className={classes.item}>
        <NavLink to="/profile" activeClassName={classes.active}>Profile</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="/dialogs" activeClassName={classes.active}>
          Messages <span className="badge badge-light">{props.messages.length}</span>
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
        <NavLink to="/users" activeClassName={classes.active}>
          Users {props.totalUsersCount 
              ? <span className="badge badge-light">{props.totalUsersCount}</span>
              : ""}
        </NavLink>
      </div>
    </nav>
    )
}

const mapStateToProps = (state) => {
  return {
    messages: state.messagesPage.messages,
    totalUsersCount: state.usersPage.totalUsersCount
  }
}

export default connect(mapStateToProps)(Navbar) 