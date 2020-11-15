import Axios from "axios";
import React from "react";
import { connect } from "react-redux";
import { setUserDataAC } from "../../redux/authReducer";
import Header from "./Header";

class HeaderContainer extends React.Component {
  componentDidMount() {
    
    Axios.get(
      `https://social-network.samuraijs.com/api/1.0/auth/me`, {
        withCredentials: true
      }
    ).then((response) => {
      if (response.data.resultCode === 0) {
        let {id, login, email} = response.data.data
        this.props.setUserDataAC(id, login, email)
      }
    });
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
  setUserDataAC,
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
