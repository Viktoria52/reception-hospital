import {  applyMiddleware, combineReducers, compose, createStore  } from 'redux';
import thunk from 'redux-thunk';
import authReducer from './auth'
import receptionReducer from "./reception";
import docReducer from "./doc";
import appReducer from "./initial";
import sortValue from "./sort";

const reducer = combineReducers({
    authReducer,
    docReducer,
    receptionReducer,
    appReducer,
    sortValue
})

const composeEnhancers = compose;
const store = createStore(reducer, composeEnhancers(
    applyMiddleware(thunk))) //DAL

export default store;