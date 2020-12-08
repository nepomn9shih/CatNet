
import { connect } from "react-redux";
import { loginThunkCreator, logoutThunkCreator } from "../../redux/authReducer";
import Login from "./Login";

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl
  }
}

const mapDispatchToProps = {
  loginThunkCreator,
  logoutThunkCreator
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
