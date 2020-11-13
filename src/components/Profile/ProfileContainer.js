import Axios from "axios";
import React from "react";
import { connect } from "react-redux";
import { setUserProfileAC } from "../../redux/profileReducer";
import Profile from "./Profile";

class ProfileContainer extends React.Component {
    
    componentDidMount() {
        Axios.get(
            `https://social-network.samuraijs.com/api/1.0/profile/2`
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

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer)