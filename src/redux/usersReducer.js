import { usersAPI } from "../API/api";

const FOLLOW = "users/FOLLOW";
const UNFOLLOW = "users/UNFOLLOW";
const SET_USERS = "users/SET_USERS"
const SET_CURRENT_PAGE = "users/SET_CURRENT_PAGE"
const SET_TOTAL_USERS_COUNT = "users/SET_TOTAL_USERS_COUNT"
const TOGGLE_IS_FETCHING = "users/TOGGLE_IS_FETCHING"
const TOGGLE_IS_FOLLOWING_PROGRESS = "users/TOGGLE_IS_FOLLOWING_PROGRESS"

let initialState = {
  users: [],
  pageSize: 20,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: []
};

const usersReducer = (state = initialState, action) => {
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
          users: action.users
        };
      }
    case SET_CURRENT_PAGE: {
        return {
          ...state,
          currentPage: action.currentPage
        };
      }
      case SET_TOTAL_USERS_COUNT: {
        return {
          ...state,
          totalUsersCount: action.totalUsersCount
        };
      }
      case TOGGLE_IS_FETCHING: {
        return {
          ...state,
          isFetching: action.isFetching
        };
      }
      case TOGGLE_IS_FOLLOWING_PROGRESS: {
        return {
          ...state,
          followingInProgress: action.isFetching 
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter(id => id !== action.userId)
        };
      }
    default:
      return state;
  }
};

export const followAC = (userId) => ({ type: FOLLOW, userId});

export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId});

export const setUsersAC = (users) => ({ type: SET_USERS, users });

export const setCurrentPageAC = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });

export const setTotalUsersCountAC = (totalUsersCount) => ({ type: SET_TOTAL_USERS_COUNT, totalUsersCount });

export const setIsFetchingAC = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching: isFetching });

export const setFollowingInProgressAC = (isFetching, userId) => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId });

//загрузка страницы юзеров нужного размера
export const getUsersThunkCreator = (currentPage, pageSize) => async (dispatch) => {
  dispatch(setIsFetchingAC(true)); //загрузка началась, показывается прелодер
  const data = await usersAPI.getUsers(currentPage, pageSize)
  dispatch(setIsFetchingAC(false));//загрузка кончилась, прелодер исчезает
  dispatch(setUsersAC(data.items));
  dispatch(setTotalUsersCountAC(data.totalCount));
}

//отписка от юзера 
export const unfollowThunkCreator = (userId) => async (dispatch) => {
  dispatch(setFollowingInProgressAC(true, userId)) //начинается процесс отписки и кнопка блокируется
  const data = await usersAPI.unfollowRequest(userId)
  if (data.resultCode === 0) {
    dispatch(unfollowAC(userId));
  }
  dispatch(setFollowingInProgressAC(false, userId)); //заканчивается процесс отписки и кнопка разблокируется
}

//подписка на юзера 
export const followThunkCreator = (userId) => async (dispatch) => {
  dispatch(setFollowingInProgressAC(true, userId))
  const data = await usersAPI.followRequest(userId)
  if (data.resultCode === 0) {
    dispatch(followAC(userId));
  }
  dispatch(setFollowingInProgressAC(false, userId));  
}

export default usersReducer;
