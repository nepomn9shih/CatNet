import { stopSubmit } from "redux-form";
import { profileAPI } from "../API/api";

const ADD_POST = "profile/ADD_POST";
const SET_USER_PROFILE = "profile/SET_USER_PROFILE"
const SET_STATUS = "profile/SET_STATUS"
const DELETE_POST = "profile/DELETE_POST";
const SAVE_PHOTO_SUCCESS = "profile/SAVE_PHOTO_SUCCESS"

let initialState = {
  posts: [
    { id: 1, message: "Опыт - это то, что позволяет человеку, сделав ошибку, сказать: 'Я так и знал!'", likeCount: 122 },
    { id: 2, message: "В мире еще много граблей, на которые не ступала нога человека!", likeCount: 21 },
    { id: 3, message: "Начиная новое дело, надо быть готовым даже к тому, что у тебя все получится", likeCount: 8 },
    { id: 4, message: "Что недопустимо в принципе, часто необходимо на практике.", likeCount: 6 },
  ],
  profile: null,
  status: ""
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: state.posts.length ? state.posts[state.posts.length-1].id + 1 : 0,
        message: action.newPostText,
        likeCount: 0,
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
      };
    }
    case SET_USER_PROFILE: {
      return {
        ...state,
        profile: action.profile,
      };
    }
    case SET_STATUS: {
      return {
        ...state,
        status: action.status,
      };
    }
    case DELETE_POST: {
      console.log("delete post")
      return {
        ...state,
        posts: state.posts.filter(p => p.id !== action.postId),
      };
    }
    case SAVE_PHOTO_SUCCESS: {
      return {
        ...state,
        profile: {...state.profile, photos: action.photos}
      };
    }
    default:
      return state;
  }
};

export const addPostActionCreator = (newPostText) => ({ type: ADD_POST, newPostText });

export const setUserProfileAC = (profile) => ({
  type: SET_USER_PROFILE,
  profile
})

export const setStatusAC = (status) => ({
  type: SET_STATUS,
  status
})

export const deletePostAC = (postId) => ({
  type: DELETE_POST,
  postId
})

export const savePhotoSuccessAC = (photos) => ({
  type: SAVE_PHOTO_SUCCESS,
  photos
})

//получаем профиль юзера и устанавливаем в стейт
export const getProfileThunkCreator = (userId) => async (dispatch) => {
  const data = await profileAPI.getProfile(userId)
  dispatch(setUserProfileAC(data));   
}

//получаем статус юзера и устанавливаем в стейт
export const getStatusThunkCreator = (userId) => async (dispatch) => {
  const data = await profileAPI.getStatus(userId)
  dispatch(setStatusAC(data));
}

//меняем статус юзера и устанавливаем в стейт
export const updateStatusThunkCreator = (status) => async (dispatch) => {
  try {
    const data = await profileAPI.updateStatus(status)
    if (data.resultCode === 0) {
      dispatch(setStatusAC(status));
    }  
  }
  catch (error) { 
    // alert(error)
    console.error(error)
  }
  
}

//загружаем фото профиля
export const savePhotoThunkCreator = (photo) => async (dispatch) => {
  const data = await profileAPI.savePhoto(photo)
  if (data.resultCode === 0) {
    dispatch(savePhotoSuccessAC(data.data.photos));
  }  
}

//изменяем данные профиля
export const saveProfileThunkCreator = (profile) => async (dispatch, getState) => {
  const userId = getState().auth.userId
  const data = await profileAPI.saveProfile(profile)
  if (data.resultCode === 0) {
    dispatch(getProfileThunkCreator(userId));
  }  else {
    dispatch(stopSubmit("editContacts", {_error: data.messages[0]})) //останавливаем подтверждение формы и получаем общую ошибку
    return Promise.reject(data.messages[0])
  }
}

export default profileReducer;
