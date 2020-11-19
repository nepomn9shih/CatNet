import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getProfileThunkCreator} from "../../redux/profileReducer";
import Profile from "./Profile";

class ProfileContainer extends React.Component {
    
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) userId = 12627
        this.props.getProfileThunkCreator(userId)
    }

    render() {
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
profile: state.profilePage.profile
})

const mapDispatchToProps = {
    getProfileThunkCreator,
}

let WithUrlDataProfileContainer = withRouter(ProfileContainer)

export default connect(mapStateToProps, mapDispatchToProps)(WithUrlDataProfileContainer)