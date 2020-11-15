import Axios from "axios";
import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { setUserProfileAC } from "../../redux/profileReducer";
import Profile from "./Profile";

class ProfileContainer extends React.Component {
    
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) userId = 12627
        Axios.get(
            `https://social-network.samuraijs.com/api/1.0/profile/${userId}`
          ).then((response) => {
            this.props.setUserProfileAC(response.data);
          });
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
    setUserProfileAC,
}

let WithUrlDataProfileContainer = withRouter(ProfileContainer)

export default connect(mapStateToProps, mapDispatchToProps)(WithUrlDataProfileContainer)