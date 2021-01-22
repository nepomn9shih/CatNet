import { stopSubmit } from "redux-form";
import { profileAPI } from "../API/api";

const ADD_POST = "profile/ADD_POST";
const SET_USER_PROFILE = "profile/SET_USER_PROFILE"
const SET_STATUS = "profile/SET_STATUS"
const DELETE_POST = "profile/DELETE_POST";
const SAVE_PHOTO_SUCCESS = "profile/SAVE_PHOTO_SUCCESS"

type PostType = {
id: number
message: string
likeCount: number
}

type ContactsType = {
  github: string
  vk: string
  facebook: string
  instagram: string
  twitter: string
  website: string
  youtube: string
  mainlink: string
}

type PhotosType = {
  small: string | null
  large: string | null
}

type ProfileType = {
userId: number
lookingForAJob: boolean
lookingForAJobDescription: string
fullName: string
contacts: ContactsType
photos: PhotosType
}

let initialState = {
  posts: [
    { id: 1, message: "Опыт - это то, что позволяет человеку, сделав ошибку, сказать: 'Я так и знал!'", likeCount: 99 },
    { id: 2, message: "В мире еще много граблей, на которые не ступала нога человека!", likeCount: 21 },
    { id: 3, message: "Начиная новое дело, надо быть готовым даже к тому, что у тебя все получится", likeCount: 8 },
    { id: 4, message: "Что недопустимо в принципе, часто необходимо на практике.", likeCount: 6 },
  ] as Array<PostType>,
  profile: null as ProfileType | null,
  status: "" as string,
  newPostText: "" as string | null
};

export type PostInitialStateType = typeof initialState

const profileReducer = (state = initialState, action: any):PostInitialStateType => {
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
        profile: {...state.profile, photos: action.photos} as ProfileType
      };
    }
    default:
      return state;
  }
};

type AddPostActionType = {
  type: typeof ADD_POST
  newPostText: string | null
}

export const addPostActionCreator = (newPostText: string | null):AddPostActionType => ({ type: ADD_POST, newPostText });

type SetUserProfileActionType = {
  type: typeof SET_USER_PROFILE
  profile: ProfileType
}

export const setUserProfileAC = (profile: ProfileType):SetUserProfileActionType => ({
  type: SET_USER_PROFILE,
  profile
})

type SetStatusActionType = {
  type: typeof SET_STATUS
  status: string | null
}

export const setStatusAC = (status: string): SetStatusActionType => ({
  type: SET_STATUS,
  status
})

type DeletePostActionType = {
  type: typeof DELETE_POST
  postId: number
}

export const deletePostAC = (postId: number):DeletePostActionType => ({
  type: DELETE_POST,
  postId
})

type SavePhotoActionType = {
  type: typeof SAVE_PHOTO_SUCCESS
  photos: PhotosType
}

export const savePhotoSuccessAC = (photos: PhotosType):SavePhotoActionType => ({
  type: SAVE_PHOTO_SUCCESS,
  photos
})

//получаем профиль юзера и устанавливаем в стейт
export const getProfileThunkCreator = (userId: number) => async (dispatch: any) => {
  const data = await profileAPI.getProfile(userId)
  dispatch(setUserProfileAC(data));   
}

//получаем статус юзера и устанавливаем в стейт
export const getStatusThunkCreator = (userId: number) => async (dispatch: any) => {
  const data = await profileAPI.getStatus(userId)
  dispatch(setStatusAC(data));
}

//меняем статус юзера и устанавливаем в стейт
export const updateStatusThunkCreator = (status: string) => async (dispatch: any) => {
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
export const savePhotoThunkCreator = (photo: any) => async (dispatch: any) => {
  const data = await profileAPI.savePhoto(photo)
  if (data.resultCode === 0) {
    dispatch(savePhotoSuccessAC(data.data.photos));
  }  
}

//изменяем данные профиля
export const saveProfileThunkCreator = (profile: ProfileType) => async (dispatch: any, getState: Function) => {
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
