
import React from "react";
import { connect } from "react-redux";
import { getAuthUserDataThunkCreator, logoutThunkCreator } from "../../redux/authReducer";
import Header from "./Header";

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.getAuthUserDataThunkCreator()
  }

  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = (state) => ({
isAuth: state.auth.isAuth,
login: state.auth.login,
})

const mapDispatchToProps = {
  getAuthUserDataThunkCreator,
  logoutThunkCreator
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
