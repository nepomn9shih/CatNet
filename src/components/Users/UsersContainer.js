import React from "react";
import { connect } from "react-redux";
import {
  followAC,
  setCurrentPageAC,
  setIsFetchingAC,
  setTotalUsersCountAC,
  setUsersAC,
  unfollowAC,
  setFollowingInProgressAC
} from "../../redux/usersReducer";
import Users from "./Users";
import Preloader from "../Preloader/Preloader";
import { usersAPI } from "../../API/api";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.setIsFetchingAC(true);
    usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then((data) => {
      this.props.setIsFetchingAC(false);
      this.props.setUsersAC(data.items);
      this.props.setTotalUsersCountAC(data.totalCount);
    });
  }
  onPageChanged = (pageNumber) => {
    this.props.setCurrentPageAC(pageNumber);
    this.props.setIsFetchingAC(true);
    usersAPI.getUsers(pageNumber, this.props.pageSize).then((data) => {
      this.props.setIsFetchingAC(false);
      this.props.setUsersAC(data.items);
    });
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
  setUsersAC,
  setCurrentPageAC,
  setTotalUsersCountAC,
  setIsFetchingAC,
  setFollowingInProgressAC
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
