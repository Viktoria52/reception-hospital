import {  applyMiddleware, combineReducers, createStore  } from 'redux';
import thunk from 'redux-thunk';
import authReducer from './authReducer'
import receptionReducer from "./receptionReducer";
import docReducer from "./docReducer";
import sortValue from "./sortReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import sortReducer from "./sortReducer";

const reducer = combineReducers({
    authReducer,
    docReducer,
    receptionReducer,
    sortValue,
    sortReducer
})

const store = createStore(reducer, composeWithDevTools(
    applyMiddleware(thunk))) //DAL

export default store;