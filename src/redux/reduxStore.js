import {applyMiddleware, combineReducers, compose, createStore} from 'redux'
import profileReducer from './profileReducer'
import messagesReducer from './messagesReducer'
import usersReducer from './usersReducer'
import authReducer from './authReducer'
import thunkMiddleware from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'
import appReducer from './appReducer'

let reducers = combineReducers({
    profilePage: profileReducer, 
    messagesPage: messagesReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer,
    form: formReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware))) 

window.store = store;

export default store