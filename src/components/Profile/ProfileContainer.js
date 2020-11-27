import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { getProfileThunkCreator, getStatusThunkCreator, updateStatusThunkCreator} from "../../redux/profileReducer";
import Profile from "./Profile";

class ProfileContainer extends React.Component {
    
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) userId = this.props.authUserId
        this.props.getProfileThunkCreator(userId)
        this.props.getStatusThunkCreator(userId)
    }

    render() {

        return (
            <div>
                <Profile {...this.props} 
                    profile={this.props.profile} 
                    status={this.props.status}
                    updateStatus={this.props.updateStatusThunkCreator}
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
profile: state.profilePage.profile,
status: state.profilePage.status,
authUserId: state.auth.userId,
isAuth: state.auth.isAuth
})

const mapDispatchToProps = {
    getProfileThunkCreator,
    getStatusThunkCreator,
    updateStatusThunkCreator
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter,
    withAuthRedirect
)(ProfileContainer)