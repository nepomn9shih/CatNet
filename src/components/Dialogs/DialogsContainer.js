
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { sendMessageCreator, setActiveDialogAC} from "../../redux/messagesReducer";
import Dialogs from "./Dialogs";

const mapStateToProps = (state) => {
  return {
    messagesPage: state.messagesPage,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: (newMessageBody) => {
      dispatch(sendMessageCreator(newMessageBody))
    },
    setActiveDialog: (activeDialogNumber) => {
      dispatch(setActiveDialogAC(activeDialogNumber))
    }
  }  
}

export default compose( 
  connect(mapStateToProps, mapDispatchToProps), 
  withRouter,
  withAuthRedirect
)(Dialogs)
