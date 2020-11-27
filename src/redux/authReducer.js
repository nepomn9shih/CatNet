import { authAPI } from "../API/api";

const SET_USER_DATA = "SET_USER_DATA";


let initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
  isFetching: false
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA: {
      return {
        ...state,
        ...action.payload
      };
    }
    default:
      return state;
  }
};

export const setUserDataAC = (userId, login, email, isAuth) => ({ 
  type: SET_USER_DATA, 
  payload: {userId, login, email, isAuth}
});

export const getAuthUserDataThunkCreator = () => {
  return (dispatch) => {
    authAPI.getMe().then((data) => {
      if (data.resultCode === 0) {
        let {id, login, email} = data.data
        dispatch(setUserDataAC(id, login, email, true))
      }
    });
}}

export const loginThunkCreator = (email, password, rememberMe) => {
  return (dispatch) => {
    authAPI.login(email, password, rememberMe).then((data) => {
      if (data.resultCode === 0) {
        dispatch(getAuthUserDataThunkCreator())
      }
    });
}}

export const logoutThunkCreator = () => {
  return (dispatch) => {
    authAPI.logout().then((data) => {
      if (data.resultCode === 0) {
        dispatch(setUserDataAC(null, null, null, false))
      }
    });
}}

export default authReducer;
