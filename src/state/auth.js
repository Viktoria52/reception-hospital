import {authAPI} from "../api/api";

const SET_USER = 'AUTH/SET_USER'
const ERROR_MESSAGE = 'AUTH/ERROR_MESSAGE'

let defaultState = {
    name: null,
    lastName: null,
    patronymic: null,
    password: null,
    error: null
}

const authReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_USER:
            return {
                ...state
            }


        case
        ERROR_MESSAGE:
            return {
                ...state,
            }
        default:
            return state

    }
}

export const setUser = (name, lastName, patronymic, password) => {
    return {type: SET_USER, payload: {name, lastName, patronymic, password}}
}
export const errorMessage = (error) => {
    return {type: ERROR_MESSAGE, payload: {error}}
}


export const loginAuth = (name, lastName, patronymic, password ) => (dispatch) => {

    authAPI.login(name, lastName, patronymic, password).then(data => {
        if(data.resultCode === 200){
            dispatch(setUser(name, lastName, patronymic, password));
        }
        // if (data.resultCode === 0) {
        //
        // } else {
        //     let message = data.messages.length>0 ? 'Enter valid email or password' : 'error';
        //     console.log(message);
        //     dispatch(errorMessage(message))
        // }
    })}

export default authReducer;