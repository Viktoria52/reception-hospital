import {authAPI} from "../api/api";

const SET_USER = 'AUTH/SET_USER'
const ERROR_MESSAGE = 'AUTH/ERROR_MESSAGE'
const PASSWORD_TEXT = 'AUTH/PASSWORD_TEXT'
const PASSWORD_TEXT_REPEAT = 'AUTH/PASSWORD_TEXT_REPEAT'

let defaultState = {
    login: null,
    password: null,
    error: null,
    passwordText: null,
    passwordTextRepeat: null
}

const authReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                login: action.login
            }
        case
        ERROR_MESSAGE:
            return {
                ...state,
                error: action.error
            }
        case
        PASSWORD_TEXT:
            console.log(state.passwordText, state.passwordTextRepeat)
            return {
                ...state,
                passwordText: action.text
            }
        case
        PASSWORD_TEXT_REPEAT:
            console.log(state.passwordText)
            return {
                ...state,
                passwordTextRepeat: action.text
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
export const passwordCreator = (text) => {
    return {type: PASSWORD_TEXT, payload: text}
}
export const passwordRepeatCreator = (text) => {
    return {type: PASSWORD_TEXT_REPEAT, payload: text}
}


export const loginAuth = (login, password) => (dispatch) => {

    authAPI.login(login, password).then(data => {
        if (data.statusCode === 200) {
            dispatch(setUser(login, password));
        }
        // if (data.resultCode === 0) {
        //
        // } else {
        //     let message = data.error >0 ? 'Enter valid email or password' : 'error';
        //     console.log(message);
        //     dispatch(errorMessage(message))
        // }
    })
}

export const registerAuth = (login, password) => (dispatch) => {
    authAPI.register(login, password)
        .then(response => {
            if (response.statusCode === 200) {
                console.log('ok!')
            }
            console.log(response)

        })
}

export default authReducer;