import {applyMiddleware, combineReducers, compose, createStore} from 'redux'
import profileReducer from './profileReducer'
import messagesReducer from './messagesReducer'
import usersReducer from './usersReducer'
import authReducer from './authReducer'
import thunkMiddleware from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'
import appReducer from './appReducer'

let rootReducer = combineReducers({
    profilePage: profileReducer, 
    messagesPage: messagesReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer,
    form: formReducer
})

type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType<RootReducerType>

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; //подключаем синхронизацию с девтулз

let store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware))) 
// @ts-ignore
window.store = store;

export default store