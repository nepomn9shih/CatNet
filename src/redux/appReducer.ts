import { ActionType } from "../types/types";
import { getAuthUserDataThunkCreator } from "./authReducer";

const INITIALIZED_SUCCESS = "app/INITIALIZED_SUCCESS";

type AppInitialStateType = {
  initialized: boolean
};

let initialState: AppInitialStateType = {
  initialized: false 
};

const appReducer = (state = initialState, action: ActionType):AppInitialStateType => {
  switch (action.type) {
    case INITIALIZED_SUCCESS: 
      return {
        ...state,
        initialized: true
    };
    
    default: return state;
  }
};

export type InitializedSuccessActionType = {
  type: typeof INITIALIZED_SUCCESS
}

export const initializedSuccessAC = (): InitializedSuccessActionType => ({ 
  type: INITIALIZED_SUCCESS
});

//инициализация приложения, предварительный запрос данных пользователя
export const initializeAppThunkCreator = () => (dispatch: any) => {
   let dispatchResult = dispatch(getAuthUserDataThunkCreator())
   dispatchResult.then(() => {dispatch(initializedSuccessAC())})
}

export default appReducer;
