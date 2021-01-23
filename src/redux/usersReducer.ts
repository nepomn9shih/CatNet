import { UsersType } from "./../types/types";
import { usersAPI } from "../API/api";
import { Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { AppStateType } from "./reduxStore";

const FOLLOW = "users/FOLLOW";
const UNFOLLOW = "users/UNFOLLOW";
const SET_USERS = "users/SET_USERS";
const SET_CURRENT_PAGE = "users/SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "users/SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "users/TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "users/TOGGLE_IS_FOLLOWING_PROGRESS";

let initialState = {
  users: [] as Array<UsersType>,
  pageSize: 20,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: [] as Array<number>,
};

export type UsersInitialStateType = typeof initialState;

const usersReducer = (
  state = initialState,
  action: UsersActionType
): UsersInitialStateType => {
  switch (action.type) {
    case FOLLOW: {
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userId) {
            return { ...user, followed: true };
          }
          return user;
        }),
      };
    }
    case UNFOLLOW: {
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userId) {
            return { ...user, followed: false };
          }
          return user;
        }),
      };
    }
    case SET_USERS: {
      return {
        ...state,
        users: action.users,
      };
    }
    case SET_CURRENT_PAGE: {
      return {
        ...state,
        currentPage: action.currentPage,
      };
    }
    case SET_TOTAL_USERS_COUNT: {
      return {
        ...state,
        totalUsersCount: action.totalUsersCount,
      };
    }
    case TOGGLE_IS_FETCHING: {
      return {
        ...state,
        isFetching: action.isFetching,
      };
    }
    case TOGGLE_IS_FOLLOWING_PROGRESS: {
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter((id) => id !== action.userId),
      };
    }
    default:
      return state;
  }
};

type FollowActionType = {
  type: typeof FOLLOW;
  userId: number;
};

export const followAC = (userId: number): FollowActionType => ({
  type: FOLLOW,
  userId,
});

type UnfollowActionType = {
  type: typeof UNFOLLOW;
  userId: number;
};

export const unfollowAC = (userId: number): UnfollowActionType => ({
  type: UNFOLLOW,
  userId,
});

type SetUsersActionType = {
  type: typeof SET_USERS;
  users: Array<UsersType>;
};

export const setUsersAC = (users: Array<UsersType>): SetUsersActionType => ({
  type: SET_USERS,
  users,
});

type SetCurrentPageActionType = {
  type: typeof SET_CURRENT_PAGE;
  currentPage: number;
};

export const setCurrentPageAC = (
  currentPage: number
): SetCurrentPageActionType => ({ type: SET_CURRENT_PAGE, currentPage });

type SetTotalUsersCountActionType = {
  type: typeof SET_TOTAL_USERS_COUNT;
  totalUsersCount: number;
};

export const setTotalUsersCountAC = (
  totalUsersCount: number
): SetTotalUsersCountActionType => ({
  type: SET_TOTAL_USERS_COUNT,
  totalUsersCount,
});

type SetIsFetchingActionType = {
  type: typeof TOGGLE_IS_FETCHING;
  isFetching: boolean;
};

export const setIsFetchingAC = (
  isFetching: boolean
): SetIsFetchingActionType => ({ type: TOGGLE_IS_FETCHING, isFetching });

type SetFollowingInProgressActionType = {
  type: typeof TOGGLE_IS_FOLLOWING_PROGRESS;
  isFetching: boolean;
  userId: number;
};

export type UsersActionType =
  FollowActionType
  | UnfollowActionType
  | SetUsersActionType
  | SetCurrentPageActionType
  | SetTotalUsersCountActionType
  | SetIsFetchingActionType
  | SetFollowingInProgressActionType;

export const setFollowingInProgressAC = (
  isFetching: boolean,
  userId: number
): SetFollowingInProgressActionType => ({
  type: TOGGLE_IS_FOLLOWING_PROGRESS,
  isFetching,
  userId,
});

type UsersDispatchType = Dispatch<UsersActionType>

type UsersThunkType = ThunkAction<Promise<void>, AppStateType, unknown, UsersActionType>

//загрузка страницы юзеров нужного размера
export const getUsersThunkCreator = (
  currentPage: number,
  pageSize: number
): UsersThunkType => async (dispatch: UsersDispatchType) => {
  dispatch(setIsFetchingAC(true)); //загрузка началась, показывается прелодер
  const data = await usersAPI.getUsers(currentPage, pageSize);
  dispatch(setIsFetchingAC(false)); //загрузка кончилась, прелодер исчезает
  dispatch(setUsersAC(data.items));
  dispatch(setTotalUsersCountAC(data.totalCount));
};

//отписка от юзера
export const unfollowThunkCreator = (userId: number): UsersThunkType => async (
  dispatch: UsersDispatchType
) => {
  dispatch(setFollowingInProgressAC(true, userId)); //начинается процесс отписки и кнопка блокируется
  const data = await usersAPI.unfollowRequest(userId);
  if (data.resultCode === 0) {
    dispatch(unfollowAC(userId));
  }
  dispatch(setFollowingInProgressAC(false, userId)); //заканчивается процесс отписки и кнопка разблокируется
};

//подписка на юзера
export const followThunkCreator = (userId: number): UsersThunkType => async (dispatch: UsersDispatchType) => {
  dispatch(setFollowingInProgressAC(true, userId));
  const data = await usersAPI.followRequest(userId);
  if (data.resultCode === 0) {
    dispatch(followAC(userId));
  }
  dispatch(setFollowingInProgressAC(false, userId));
};

export default usersReducer;
