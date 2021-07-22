import {preloaderAC} from "./receptionReducer";
import Service from "../api/ApiService";
import tokenServise from "../api/tokenServise";

const SET_AUTH = 'AUTH/SET_AUTH'
const SET_REGISTER_MESSAGE = 'AUTH/SET_REGISTER_MESSAGE'
const SET_TITLE = 'AUTH/SET_TITLE'
const FAILED_REGISTER_MESSAGE = 'AUTH/FAILED_REGISTER_MESSAGE'
const LOGIN_FAILED_MESSAGE = 'AUTH/LOGIN_FAILED_MESSAGE'
const REGISTER_PASSWORD_ERRORS = 'AUTH/REGISTER_PASSWORD_ERRORS'
const CLEAN_ERRORS = 'AUTH/CLEAN_ERRORS'
const PASSWORD_FAILED_MESSAGE = 'AUTH/PASSWORD_FAILED_MESSAGE'

let defaultState = {
    login: null,
    password: null,
    tokenAuth: tokenServise.getToken(),
    isAuth: false,
    registerMessage: null,
    title: null,
    messageFailedRegister: null,
    messageFailedLogin: null,
    errors: [],
    passwordFailMessage: null
}

const authReducer = (state = defaultState, action) => {
    switch (action.type) {
        case
        SET_AUTH:
            return {
                ...state,
                isAuth: action.bool
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
        FAILED_REGISTER_MESSAGE:
            return {
                ...state,
                messageFailedRegister: action.message
            }
        case
        LOGIN_FAILED_MESSAGE:
            return {
                ...state,
                messageFailedLogin: action.message
            }
        case
        REGISTER_PASSWORD_ERRORS:
            return {
                ...state,
                errors: [...state.errors, ...action.errors]
            }
        case
        CLEAN_ERRORS:
            return {
                ...state,
                errors: action.cleaner
            }
        case
        PASSWORD_FAILED_MESSAGE:
            return {
                ...state,
                passwordFailMessage: action.message
            }
        default:
            return state

    }
}
export const AuthReducer = (bool) => {
    return {type: SET_AUTH, bool}
}
export const setRegisterMessage = (message) => {
    return {type: SET_REGISTER_MESSAGE, payload: {message}}
}
export const setTittle = (tit) => {
    return {type: SET_TITLE, payload: {tit}}
}
export const registerFailedMessageAC = (message) => {
    return {type: FAILED_REGISTER_MESSAGE, message}
}
export const loginFailedMessageAC = (message) => {
    return {type: LOGIN_FAILED_MESSAGE, message}
}
export const passwordFailedMessageAC = (message) => {
    return {type: PASSWORD_FAILED_MESSAGE, message}
}
export const registerPasswordErrors = (errors) => {
    return {type: REGISTER_PASSWORD_ERRORS, errors}
}
export const cleanErrors = (cleaner) => {
    return {type: CLEAN_ERRORS, cleaner}
}


export const loginAuth = (login, password) =>
    async (dispatch) => {
        dispatch(preloaderAC(true))
        try {
            const response = await Service.login(login, password, 'login', {"Content-type": "application/json"})
            if (response.response.status === 200) {
                dispatch(AuthReducer(true))
                dispatch(loginFailedMessageAC(null))
                dispatch(loginFailedMessageAC(null))
                dispatch(preloaderAC(false))
            }
            if (response.response.status === 400) {
                dispatch(loginFailedMessageAC(response.result.message))
            }
            if (response.response.status === 403) {
                dispatch(loginFailedMessageAC(null))
                dispatch(passwordFailedMessageAC(response.result.message))
            }
            dispatch(preloaderAC(false))
        } catch (error) {

        }

    }

export const registerAuth = (login, password) =>
    async (dispatch) => {
        dispatch(preloaderAC(true))
        try {
            const response = await Service.register(login, password, 'register', {"Content-type": "application/json"})
            dispatch(cleanErrors([]))
            dispatch(registerFailedMessageAC(null))
            if (response.response.status === 200) {
                dispatch(registerFailedMessageAC(null))
                dispatch(setRegisterMessage(response.result))
            }
            if (response.response.status === 400) {
                dispatch(registerPasswordErrors(response.result.errors.errors))
            }
            if (response.response.status === 409) {
                dispatch(registerFailedMessageAC('Пользователь с таким логином уже есть'))
            }
        } catch (error) {
            console.log(error)
        }
        dispatch(preloaderAC(false))
    }

export default authReducer;