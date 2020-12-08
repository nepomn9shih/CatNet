import { stopSubmit } from "redux-form";
import { authAPI, securityAPI } from "../API/api";

const SET_USER_DATA = "auth/SET_USER_DATA";
const GET_CAPTCHA_URL_SUCCESS = "auth/GET_CAPTCHA_URL_SUCCESS";

let initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
  isFetching: false,
  captchaUrl: null //если null, то капча не обязательна
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA: 
    case GET_CAPTCHA_URL_SUCCESS: {
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

export const getCaptchaUrlSuccessAC = (captchaUrl) => ({ 
  type: GET_CAPTCHA_URL_SUCCESS, 
  payload: {captchaUrl}
});

export const getAuthUserDataThunkCreator = () => async (dispatch) => {
  const data = await authAPI.getMe();
        
  if (data.resultCode === 0) {
    const {id, login, email} = data.data
    dispatch(setUserDataAC(id, login, email, true))
  }
}

export const loginThunkCreator = (email, password, rememberMe, captcha) => async (dispatch) => {
  const data = await authAPI.login(email, password, rememberMe, captcha);
    
  if (data.resultCode === 0) {
    dispatch(getAuthUserDataThunkCreator())   //залогинились успешно, запрашиваем свои данные для профиля
    dispatch(getCaptchaUrlSuccessAC(null))
  } else {
    if (data.resultCode === 10) { //не успешно, требуется капча, запрашиваем капчу
      dispatch(getCaptchaUrlThunkCreator())
    }
    const message = data.messages.length > 0 ? data.messages[0] : "Some error!"
    dispatch(stopSubmit("login", {_error: message})) //останавливаем сабмит формы login, _error - общая ошибка (ошибка в одном из полей)
  }
};


export const logoutThunkCreator = () => async (dispatch) => {
  const data = await authAPI.logout()
  
  if (data.resultCode === 0) {
    dispatch(setUserDataAC(null, null, null, false))
  }
};

export const getCaptchaUrlThunkCreator = () => async (dispatch) => {
  const data = await securityAPI.getCaptchaUrl()
  const captchaUrl = data.url
  dispatch(getCaptchaUrlSuccessAC(captchaUrl))
};

export default authReducer;
