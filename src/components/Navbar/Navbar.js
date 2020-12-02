import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import './Navbar.css';

const Navbar = (props) => {
    return (
      <nav className="p-3">
      <div className="item">
        <NavLink to="/profile" activeClassName="active">Profile</NavLink>
      </div>
      <div className="item">
        <NavLink to="/dialogs" activeClassName="active">
          Messages <span className="badge badge-light">{props.messages.length}</span>
        </NavLink>
      </div>
      <div className="item">
        <NavLink to="/news" activeClassName="active">News</NavLink>
      </div>
      <div className="item">
        <NavLink to="/music" activeClassName="active">Music</NavLink>
      </div>
      <div className="item">
        <NavLink to="/games" activeClassName="active">Games</NavLink>
      </div>
      <div className="item">
        <NavLink to="/settings" activeClassName="active">Settings</NavLink>
      </div>
      <hr />
      <div className="item">
        <NavLink to="/users" activeClassName="active">
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