import React from "react";
import "./App.css";
import Profile from "./components/Profile/Profile";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import { Route } from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import StartPage from "./components/StartPage/StartPage";

const App = () => {
  return (
      <div className="container">
        <div className="row">
          <div className="col-12 bg-header-colour">
            <Header />
          </div>
        </div>
        <div className="row">
          <div className="col-2 bg-navbar-colour">
            <Navbar />
          </div>
          <div className="col-10 bg-content-colour">
          <Route
              path="/" exact
              render={() => <StartPage />}
            />
            <Route
              path="/profile"
              render={() => <ProfileContainer />}
            />
            <Route
              path="/dialogs"
              render={() => (
                <DialogsContainer />
              )}
            />
            <Route path="/news" component={News} />
            <Route path="/music" component={Music} />
            <Route path="/settings" component={Settings} />
            <Route
              path="/users"
              render={() => (
                <UsersContainer />
              )}
            />
        </div>
      </div>
    </div>
  );
};

export default App;
