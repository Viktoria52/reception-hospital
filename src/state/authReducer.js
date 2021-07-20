import {preloaderAC} from "./receptionReducer";
import Service from "../api/ApiService";

const SET_AUTH = 'AUTH/SET_AUTH'
const SET_REGISTER_MESSAGE = 'AUTH/SET_REGISTER_MESSAGE'
const SET_TITLE = 'AUTH/SET_TITLE'
const FAILED_REGISTER_MESSAGE = 'AUTH/FAILED_REGISTER_MESSAGE'
const LOGIN_FAILED_MESSAGE = 'AUTH/LOGIN_FAILED_MESSAGE'

let defaultState = {
    login: null,
    password: null,
    tokenAuth: localStorage.getItem('token'),
    isAuth: false,
    registerMessage: null,
    title: null,
    messageFailedRegister: null,
    messageFailedLogin: null,
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

// const Service = new ApiService()

export const loginAuth = (login, password) =>
    async (dispatch) => {
        dispatch(preloaderAC(true))
        try {
            const response = await Service.login(login, password, 'login', {"Content-type": "application/json"})
            if (response.status === 200) {
                dispatch(AuthReducer(true))
                dispatch(loginFailedMessageAC(null))
            }
        } catch (error) {
            dispatch(loginFailedMessageAC('Неверный логин или пароль'))
        }
        dispatch(preloaderAC(false))
    }

export const registerAuth = (login, password) =>
    async (dispatch) => {
        dispatch(preloaderAC(true))
        try {
            const response = await Service.register(login, password, 'register', {"Content-type": "application/json"})
            if (response.response.status === 200) {
                dispatch(setRegisterMessage(response.result))
            }
        } catch (error) {
            dispatch(registerFailedMessageAC('Пользователь с таким логином уже есть'))
        }
        dispatch(preloaderAC(false))
    }

export default authReducer;