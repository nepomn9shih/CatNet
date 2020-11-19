import React from "react";
import { connect } from "react-redux";
import {
  followAC,
  setCurrentPageAC,
  setIsFetchingAC,
  setTotalUsersCountAC,
  setUsersAC,
  unfollowAC,
  setFollowingInProgressAC,
  getUsersThunkCreator
} from "../../redux/usersReducer";
import Users from "./Users";
import Preloader from "../Preloader/Preloader";
import { usersAPI } from "../../API/api";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize)
  }
  onPageChanged = (pageNumber) => {
    this.props.setCurrentPageAC(pageNumber);
    this.props.getUsers(pageNumber, this.props.pageSize)
  };

  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          onPageChanged={this.onPageChanged}
          users={this.props.users}
          follow={this.props.followAC}
          unfollow={this.props.unfollowAC}
          setFollowingInProgress={this.props.setFollowingInProgressAC}
          followingInProgress={this.props.followingInProgress}
        />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress,
  };
};

const mapDispatchToProps = {
  followAC,
  unfollowAC,
  setCurrentPageAC,
  setFollowingInProgressAC,
  getUsers: getUsersThunkCreator
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
