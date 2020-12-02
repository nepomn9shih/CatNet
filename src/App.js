import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
// import DialogsContainer from "./components/Dialogs/DialogsContainer";
import { Route, withRouter } from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
// import UsersContainer from "./components/Users/UsersContainer";
// import ProfileContainer from "./components/Profile/ProfileContainer";
import StartPage from "./components/StartPage/StartPage";
import HeaderContainer from "./components/Header/HeaderContainer";
// import LoginContainer from "./components/Login/LoginContainer";
import { connect } from "react-redux";
import { compose } from "redux";
import { initializeAppThunkCreator } from "./redux/appReducer";
import Preloader from "./components/Preloader/Preloader";
import Footer from "./components/Footer/Footer";
import { withSuspense } from "./hoc/withSuspense";
import Games from "./components/Games/Games";

const DialogsContainer = React.lazy(() => import("./components/Dialogs/DialogsContainer"))
const ProfileContainer = React.lazy(() => import("./components/Profile/ProfileContainer"))
const UsersContainer = React.lazy(() => import("./components/Users/UsersContainer"))
const LoginContainer = React.lazy(() => import("./components/Login/LoginContainer"))

class App extends React.Component {
  
  componentDidMount() {
    this.props.initializeAppThunkCreator()
  }
  
  render () {
  if (!this.props.initialized) {
    return <Preloader />
  }
  
  return (
    <div className="container-lg">
      <HeaderContainer />
      <div className="row">
        <div className="col-3 col-md-2 bg-navbar-colour">
          <Navbar />
        </div>
        <div className="col-9 col-md-10 bg-content-colour">
          <Route
            path="/" exact
            render={() => <StartPage />}
          />
          <Route
            path="/CatNet"
            render={() => <StartPage />}
          />
          <Route
            path="/profile/:userId?"
            render={withSuspense(ProfileContainer)}
          />
          <Route
            path="/dialogs"
            render={withSuspense(DialogsContainer)}
          />
          <Route path="/news" component={News} />
          <Route path="/music" component={Music} />
          <Route path="/settings" component={Settings} />
          <Route path="/games" component={Games} />
          <Route
            path="/users"
            render={withSuspense(UsersContainer)}
          />
          <Route path="/login" component={withSuspense(LoginContainer)} />
        </div>
        <Footer />
      </div>
    </div>
  );
};
}

const mapStateToProps = (state) => {
  return {
    initialized: state.app.initialized
  }
}

const mapDispatchToProps = {
  initializeAppThunkCreator
}

export default compose( 
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(App);
