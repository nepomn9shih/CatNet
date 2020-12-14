import { getAuthUserDataThunkCreator } from "./authReducer";

const INITIALIZED_SUCCESS = "app/INITIALIZED_SUCCESS";

let initialState = {
  initialized: false 
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZED_SUCCESS: 
      return {
        ...state,
        initialized: true
    };
    
    default: return state;
  }
};

export const initializedSuccessAC = () => ({ 
  type: INITIALIZED_SUCCESS
});

//инициализация приложения, предварительный запрос данных пользователя
export const initializeAppThunkCreator = () => (dispatch) => {
   let dispatchResult = dispatch(getAuthUserDataThunkCreator())
   dispatchResult.then(() => {dispatch(initializedSuccessAC())})
}

export default appReducer;
