import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  setCurrentPageAC,
  setFollowingInProgressAC,
  getUsersThunkCreator,
  followThunkCreator,
  unfollowThunkCreator
} from "../../redux/usersReducer";
import Users from "./Users";
import { 
  getPageSize, 
  getUsers, 
  getTotalUsersCount, 
  getCurrentPage,
  getIsFetching,
  getFollowingInProgress
 } from "../../redux/usersSelectors";
import { UsersType } from "../../types/types";
import { AppStateType } from "../../redux/reduxStore";

type UsersContainerPropsType = {
  currentPage: number
  pageSize: number
  totalUsersCount: number
  users: Array<UsersType>
  followingInProgress: boolean
  isFetching: boolean
  getUsers: (currentPage: number, pageSize: number) => void
  setCurrentPageAC: (pageNumber: number) => void
  followThunkCreator: () => void
  unfollowThunkCreator: () => void
}

const UsersContainer: React.FC<UsersContainerPropsType> = (props) => {
  useEffect(() => props.getUsers(props.currentPage, props.pageSize), [])
 
  const onPageChanged = (pageNumber: number) => {
    props.setCurrentPageAC(pageNumber);
    props.getUsers(pageNumber, props.pageSize)
  };

    return (
      <Users
        totalUsersCount={props.totalUsersCount}
        pageSize={props.pageSize}
        currentPage={props.currentPage}
        onPageChanged={onPageChanged}
        users={props.users}
        follow={props.followThunkCreator}
        unfollow={props.unfollowThunkCreator}
        followingInProgress={props.followingInProgress}
        isFetching={props.isFetching}
      />
    );
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

const mapStateToProps = (state: AppStateType) => {
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

// @ts-ignore
export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)
