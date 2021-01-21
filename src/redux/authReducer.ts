import { stopSubmit } from "redux-form";
import { authAPI, securityAPI } from "../API/api";

const SET_USER_DATA = "auth/SET_USER_DATA";
const GET_CAPTCHA_URL_SUCCESS = "auth/GET_CAPTCHA_URL_SUCCESS";

let initialState = {
  userId: null as number | null,
  email: null as number | null,
  login: null as number | null,
  isAuth: false,
  isFetching: false,
  captchaUrl: null as number | null //если null, то капча не обязательна
};

export type initialStateType = typeof initialState

const authReducer = (state = initialState, action: any):initialStateType => {
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

type SetUserDataActionPayloadType = {
  userId: number | null
  email: string | null
  login: string | null
  isAuth: boolean
}

type SetUserDataActionType = {
  type: typeof SET_USER_DATA
  payload: SetUserDataActionPayloadType
}

export const setUserDataAC = (userId: number | null, login: string | null, email: string | null, isAuth: boolean):SetUserDataActionType => ({ 
  type: SET_USER_DATA, 
  payload: {userId, login, email, isAuth}
});

type GetCaptchaUrlSuccess = {
  type: typeof GET_CAPTCHA_URL_SUCCESS
  payload: {captchaUrl: string | null}
}

export const getCaptchaUrlSuccessAC = (captchaUrl: string | null):GetCaptchaUrlSuccess => ({ 
  type: GET_CAPTCHA_URL_SUCCESS, 
  payload: {captchaUrl}
});

//получение данных пользователя
export const getAuthUserDataThunkCreator = () => async (dispatch: any) => {
  const data = await authAPI.getMe();
  if (data.resultCode === 0) {
    const {id, login, email} = data.data
    dispatch(setUserDataAC(id, login, email, true))
  }
}

//отправка данных авторизации на сервер
export const loginThunkCreator = (email: any, password: any, rememberMe: any, captcha: any) => async (dispatch: any) => {
  const data = await authAPI.login(email, password, rememberMe, captcha);  
  if (data.resultCode === 0) {
    dispatch(getAuthUserDataThunkCreator())   //залогинились успешно, запрашиваем свои данные для профиля
    dispatch(getCaptchaUrlSuccessAC(null))    //обнуляем капчу в стейте
  } else {
    if (data.resultCode === 10) { //не успешно, требуется капча, запрашиваем капчу
      dispatch(getCaptchaUrlThunkCreator())
    }
    const message = data.messages.length > 0 ? data.messages[0] : "Some error!"
    dispatch(stopSubmit("login", {_error: message})) //останавливаем сабмит формы login, _error - общая ошибка (ошибка в одном из полей)
  }
};

//вылогиниваемся из учетной записи
export const logoutThunkCreator = () => async (dispatch: any) => {
  const data = await authAPI.logout()
  if (data.resultCode === 0) {
    dispatch(setUserDataAC(null, null, null, false))
  }
};

//делаем запрос на капчу
export const getCaptchaUrlThunkCreator = () => async (dispatch: any) => {
  const data = await securityAPI.getCaptchaUrl()
  const captchaUrl = data.url
  dispatch(getCaptchaUrlSuccessAC(captchaUrl))
};

export default authReducer;
