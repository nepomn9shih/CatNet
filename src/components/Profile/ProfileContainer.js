import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { getProfileThunkCreator, getStatusThunkCreator, updateStatusThunkCreator} from "../../redux/profileReducer";
import { followThunkCreator, unfollowThunkCreator } from "../../redux/usersReducer";
import { getFollowingInProgress, getUsers} from "../../redux/usersSelectors";
import Profile from "./Profile";

class ProfileContainer extends React.Component {
    
refreshProfile = () => {
    let userId = this.props.match.params.userId
        if (!userId) {
            userId = this.props.authUserId
            if (!userId) {
                this.props.history.push("/login")
            }
        }
        this.props.getProfileThunkCreator(userId)
        this.props.getStatusThunkCreator(userId)
}

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.match.params.userId === prevProps.match.params.userId) this.refreshProfile()
    }

    render() {

        return (
            <div>
                <Profile {...this.props} 
                    profile={this.props.profile} 
                    status={this.props.status}
                    updateStatus={this.props.updateStatusThunkCreator}
                    followingInProgress={this.props.followingInProgress}
                    unfollow={this.props.unfollow}
                    follow={this.props.follow}
                    users={this.props.users}
                    authUserId={this.props.authUserId}
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
profile: state.profilePage.profile,
status: state.profilePage.status,
authUserId: state.auth.userId,
isAuth: state.auth.isAuth,
followingInProgress: getFollowingInProgress(state),
users: getUsers(state)
})

const mapDispatchToProps = {
    getProfileThunkCreator,
    getStatusThunkCreator,
    updateStatusThunkCreator,
    unfollow: unfollowThunkCreator,
    follow: followThunkCreator
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter,
    withAuthRedirect
)(ProfileContainer)