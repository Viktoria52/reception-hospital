import {authAPI} from "../api/api";

const SET_USER = 'AUTH/SET_USER'
const ERROR_MESSAGE = 'AUTH/ERROR_MESSAGE'
const PASSWORD_TEXT = 'AUTH/PASSWORD_TEXT'
const PASSWORD_TEXT_REPEAT = 'AUTH/PASSWORD_TEXT_REPEAT'
const SET_TOKEN = 'AUTH/SET_TOKEN'
const SET_AUTH = 'AUTH/SET_AUTH'
const SET_REGISTER_MESSAGE = 'AUTH/SET_REGISTER_MESSAGE'
const SET_TITLE = 'AUTH/SET_TITLE'
const VALIDATION_LOGIN_LENGTH = 'AUTH/VALIDATION_LOGIN_LENGTH'
const FAILED_REGISTER_MESSAGE = 'AUTH/FAILED_REGISTER_MESSAGE'

let defaultState = {
    login: null,
    password: null,
    error: null,
    passwordText: null,
    passwordTextRepeat: null,
    tokenAuth: localStorage.getItem('token'),
    isAuth: false,
    registerMessage: null,
    title: null,
    loginLength: null,
    messageFailedRegister: null
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
            return {
                ...state,
                passwordTextRepeat: action.text
            }
        case
        SET_TOKEN:
            return {
                ...state,
                tokenAuth: action.payload.tokenText
            }
        case
        SET_AUTH:
            return {
                ...state,
                isAuth: action.payload.bool
            }
        case
        SET_REGISTER_MESSAGE:
            return {
                ...state,
                registerMessage: action.payload.message
            }
        case
        SET_TITLE:
            return {
                ...state,
                title: action.payload.tit
            }
        case
        VALIDATION_LOGIN_LENGTH:
            return {
                ...state,
                loginLength: action.message
            }
        case
        FAILED_REGISTER_MESSAGE:
            return {
                ...state,
                messageFailedRegister: action.message
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
// export const setToken = (tokenText) => {
//     return {type: SET_TOKEN, payload: {tokenText}}
// }
export const setToken = (tokenText) => {
    return {type: SET_TOKEN, payload: {tokenText}}
}
export const Auth = (bool) => {
    return {type: SET_AUTH, payload: {bool}}
}
export const setRegisterMessage = (message) => {
    return {type: SET_REGISTER_MESSAGE, payload: {message}}
}
export const setTittle = (tit) => {
    return {type: SET_TITLE, payload: {tit}}
}

export const validLengthLoginAC = (message) => {
    return {type: VALIDATION_LOGIN_LENGTH, message}
}
export const registerFailedMessageAC = (message) => {
    return {type: FAILED_REGISTER_MESSAGE, message}
}


export const loginAuth = (login, password) =>
    async (dispatch) => {
        try {
            const response = await authAPI.login(login, password)
            localStorage.setItem('token', response.data)
            dispatch(Auth(true))

        } catch (error) {
            console.log(error)
        }
    }

export const registerAuth = (login, password) =>
    async (dispatch) => {
        try {
            const response = await authAPI.register(login, password)
            if (response.status === 200) {
                dispatch(setRegisterMessage(response.data))
            }

        } catch (error) {
            dispatch(registerFailedMessageAC('Такой пользователь уже есть'))
            console.log(error)
        }
    }

export default authReducer;