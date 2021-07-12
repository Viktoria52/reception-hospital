import {  applyMiddleware, combineReducers, compose, createStore  } from 'redux';
import thunk from 'redux-thunk';
import authReducer from './auth'
import receptionReducer from "./reception";
import docReducer from "./doc";
import appReducer from "./initial";
import sortValue from "./sort";
import {composeWithDevTools} from "redux-devtools-extension";

const reducer = combineReducers({
    authReducer,
    docReducer,
    receptionReducer,
    appReducer,
    sortValue
})

const store = createStore(reducer, composeWithDevTools(
    applyMiddleware(thunk))) //DAL

export default store;