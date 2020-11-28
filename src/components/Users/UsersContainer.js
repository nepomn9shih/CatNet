import React from "react";
import { connect } from "react-redux";
import {
  setCurrentPageAC,
  setFollowingInProgressAC,
  getUsersThunkCreator,
  followThunkCreator,
  unfollowThunkCreator
} from "../../redux/usersReducer";
import Users from "./Users";
import Preloader from "../Preloader/Preloader";
import { 
  getPageSize, 
  getUsers, 
  getTotalUsersCount, 
  getCurrentPage,
  getIsFetching,
  getFollowingInProgress
 } from "../../redux/usersSelectors";

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
          follow={this.props.followThunkCreator}
          unfollow={this.props.unfollowThunkCreator}
          followingInProgress={this.props.followingInProgress}
        />
      </>
    );
  }
}

// const mapStateToProps = (state) => {
//   return {
//     users: state.usersPage.users,
//     pageSize: state.usersPage.pageSize,
//     totalUsersCount: state.usersPage.totalUsersCount,
//     currentPage: state.usersPage.currentPage,
//     isFetching: state.usersPage.isFetching,
//     followingInProgress: state.usersPage.followingInProgress,
//   };
// };

const mapStateToProps = (state) => {
    return {
      users: getUsers(state),
      pageSize: getPageSize(state),
      totalUsersCount: getTotalUsersCount(state),
      currentPage: getCurrentPage(state),
      isFetching: getIsFetching(state),
      followingInProgress: getFollowingInProgress(state),
    };
  };

const mapDispatchToProps = {
  followThunkCreator,
  unfollowThunkCreator,
  setCurrentPageAC,
  setFollowingInProgressAC,
  getUsers: getUsersThunkCreator
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)
