import { Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { InitializedSuccessActionType } from "../redux/appReducer";
import { SetUserDataActionType, GetCaptchaUrlSuccessType } from "../redux/authReducer";
import { AppStateType } from "../redux/reduxStore";
import { FollowActionType, SetCurrentPageActionType, SetFollowingInProgressActionType, SetIsFetchingActionType, SetTotalUsersCountActionType, SetUsersActionType, UnfollowActionType } from "../redux/usersReducer";

export type ActionType =
  FollowActionType
  | UnfollowActionType
  | SetUsersActionType
  | SetCurrentPageActionType
  | SetTotalUsersCountActionType
  | SetIsFetchingActionType
  | SetFollowingInProgressActionType
  | SetUserDataActionType
  | GetCaptchaUrlSuccessType
  | InitializedSuccessActionType
  ;

export type DispatchType = Dispatch<ActionType>

export type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionType>

//messagesReducer

export type InitialStateMessageType = {
    id: number
    message: string
  }
  
export type InitialStateDialogType = {
    id: number
    name: string
    messages: Array<InitialStateMessageType>
  }

//profileReducer

export type PostType = {
  id: number;
  message: string;
  likeCount: number;
};

export type ContactsType = {
  github: string;
  vk: string;
  facebook: string;
  instagram: string;
  twitter: string;
  website: string;
  youtube: string;
  mainlink: string;
};

export type PhotosType = {
  small: string | null;
  large: string | null;
};

export type ProfileType = {
  userId: number;
  lookingForAJob: boolean;
  lookingForAJobDescription: string;
  fullName: string;
  contacts: ContactsType;
  photos: PhotosType;
};

//userReducer

export type UsersType = {
  id: number;
  name: string;
  status: string;
  photos: PhotosType;
  followed: boolean
};

