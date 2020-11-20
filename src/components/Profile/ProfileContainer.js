import React from "react";
import { connect } from "react-redux";
import { Redirect, withRouter } from "react-router-dom";
import { getProfileThunkCreator} from "../../redux/profileReducer";
import Profile from "./Profile";

class ProfileContainer extends React.Component {
    
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) userId = 12627
        this.props.getProfileThunkCreator(userId)
    }

    render() {

        if (!this.props.isAuth) return <Redirect to={"/login"} />
        
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
profile: state.profilePage.profile,
isAuth: state.auth.isAuth
})

const mapDispatchToProps = {
    getProfileThunkCreator,
}

let WithUrlDataProfileContainer = withRouter(ProfileContainer)

export default connect(mapStateToProps, mapDispatchToProps)(WithUrlDataProfileContainer)