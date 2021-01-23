import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
// import DialogsContainer from "./components/Dialogs/DialogsContainer";
import { Redirect, Route, Switch, withRouter } from "react-router-dom";
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
import About from "./components/About/About";
import Error404 from "./components/Error/Error404";

const DialogsContainer = React.lazy(() => import("./components/Dialogs/DialogsContainer"))
const ProfileContainer = React.lazy(() => import("./components/Profile/ProfileContainer"))
const UsersContainer = React.lazy(() => import("./components/Users/UsersContainer"))
const LoginContainer = React.lazy(() => import("./components/Login/LoginContainer"))

class App extends React.Component {
  
  // обрабатываем необработанные промисы
  catchAllUnhandledErrors = (promiseRejectionEvent) => {
    // alert("Какая-то ошибка!")
    console.error("Какая-то ошибка:" + promiseRejectionEvent)
  }

  componentDidMount() {
    this.props.initializeAppThunkCreator()
    window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors)  // подписываемся на необработанные промисы
  }

  componentWillUnmount() {
    window.removeEventListener("unhandledrejection", this.catchAllUnhandledErrors) // отписываемся когда компонента будет размонтирована
  }
  
  render () {
  if (!this.props.initialized) {
    return <Preloader />
  }
  
  return (
    <div className="container-lg px-0">
    <div className="d-flex flex-column main">
      <HeaderContainer />
      <div className="row flex-grow-1">
        <div className="col-3 col-md-2 bg-navbar-colour">
          <Navbar />
        </div>
        <div className="col-9 col-md-10 bg-content-colour">
          <Switch>
            <Redirect from="/CatNet" to="/" />
            <Route
              path="/" exact
              render={() => <StartPage />}
            />
            <Route
              path="/profile/:userId?"
              render={withSuspense(ProfileContainer)}
            />
            <Redirect exact from="/dialogs" to={"/dialogs/" + this.props.activeDialog} />
            <Route
              path="/dialogs/:dialogId?"
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
            <Route path="/about" component={About} />
            <Route path="*" component={Error404} />
          </Switch>
        </div>
        </div>
        <Footer />
      
    </div>
    </div>
  );
};
}

const mapStateToProps = (state) => {
  return {
    initialized: state.app.initialized,
    activeDialog: state.messagesPage.activeDialog
  }
}

const mapDispatchToProps = {
  initializeAppThunkCreator
}

export default compose( 
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(App);
