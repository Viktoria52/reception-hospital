import {authAPI} from "../api/api";

const SET_USER = 'AUTH/SET_USER'
const ERROR_MESSAGE = 'AUTH/ERROR_MESSAGE'

let defaultState = {
    login: null,
    password: null,
    error: null
}

const authReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
             login:action.login
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

export const setUser = (login, password) => {
    return {type: SET_USER, payload: {login, password}}
}
export const errorMessage = (error) => {
    return {type: ERROR_MESSAGE, payload: {error}}
}


export const loginAuth = (login, password ) => (dispatch) => {

    authAPI.login(login, password).then(data => {
        if(data.statusCode === 200){
            dispatch(setUser(login, password));
        }
        // if (data.resultCode === 0) {
        //
        // } else {
        //     let message = data.error >0 ? 'Enter valid email or password' : 'error';
        //     console.log(message);
        //     dispatch(errorMessage(message))
        // }
    })}

export const registerAuth = (login, password ) => (dispatch) => {
    authAPI.register(login, password )
        .then(response =>{
            if(response.statusCode === 200){
                console.log('ok!')
            }
            console.log(response)

    })
}

export default authReducer;