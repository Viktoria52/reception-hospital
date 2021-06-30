import {  applyMiddleware, combineReducers, compose, createStore  } from 'redux';
import thunk from 'redux-thunk';
import authReducer from './auth'

const reducer = combineReducers({
    authReducer
})

const composeEnhancers = compose;
const store = createStore(reducer, composeEnhancers(
    applyMiddleware(thunk))) //DAL

export default store;