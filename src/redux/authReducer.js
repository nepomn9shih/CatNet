import { stopSubmit } from "redux-form";
import { authAPI } from "../API/api";

const SET_USER_DATA = "auth/SET_USER_DATA";


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

export const getAuthUserDataThunkCreator = () => async (dispatch) => {
  const data = await authAPI.getMe();
        
  if (data.resultCode === 0) {
    const {id, login, email} = data.data
    dispatch(setUserDataAC(id, login, email, true))
  }
}

export const loginThunkCreator = (email, password, rememberMe) => async (dispatch) => {
  const data = await authAPI.login(email, password, rememberMe);
    
  if (data.resultCode === 0) {
    dispatch(getAuthUserDataThunkCreator())
  } 
  else {
    const message = data.messages.length > 0 ? data.messages[0] : "Some error!"
    dispatch(stopSubmit("login", {_error: message}))
  }
};


export const logoutThunkCreator = () => async (dispatch) => {
  const data = await authAPI.logout()
  
  if (data.resultCode === 0) {
    dispatch(setUserDataAC(null, null, null, false))
  }
};

export default authReducer;
