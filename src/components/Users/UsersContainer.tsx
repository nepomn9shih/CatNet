import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  setCurrentPageAC,
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

type UsersContainerStateToPropsType = {
  currentPage: number
  pageSize: number
  totalUsersCount: number
  users: Array<UsersType>
  followingInProgress: Array<number>
  isFetching: boolean
}

type UsersContainerDispatchToPropsType = {
  getUsers: (currentPage: number, pageSize: number) => void
  setCurrentPageAC: (pageNumber: number) => void
  followThunkCreator: (id: number) => void
  unfollowThunkCreator: (id: number) => void
}

type UsersContainerPropsType = UsersContainerStateToPropsType & UsersContainerDispatchToPropsType

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

const mapStateToProps  = (state: AppStateType): UsersContainerStateToPropsType => {
    return {
      users: getUsers(state),
      pageSize: getPageSize(state),
      totalUsersCount: getTotalUsersCount(state),
      currentPage: getCurrentPage(state),
      isFetching: getIsFetching(state),
      followingInProgress: getFollowingInProgress(state),
    };
  };

const mapDispatchToProps: UsersContainerDispatchToPropsType = {
  followThunkCreator,
  unfollowThunkCreator,
  setCurrentPageAC,
  getUsers: getUsersThunkCreator
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)
