
import React from "react";
import { connect } from "react-redux";
import { usersAPI } from "../../API/api";
import { setUserDataAC } from "../../redux/authReducer";
import Header from "./Header";

class HeaderContainer extends React.Component {
  componentDidMount() {
    
    usersAPI.getUserData().then((data) => {
      if (data.resultCode === 0) {
        let {id, login, email} = data.data
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
