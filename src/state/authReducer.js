import {authAPI} from "../api/api";

const SET_USER = 'AUTH/SET_USER'
const SET_TOKEN = 'AUTH/SET_TOKEN'
const SET_AUTH = 'AUTH/SET_AUTH'
const SET_REGISTER_MESSAGE = 'AUTH/SET_REGISTER_MESSAGE'
const SET_TITLE = 'AUTH/SET_TITLE'
const FAILED_REGISTER_MESSAGE = 'AUTH/FAILED_REGISTER_MESSAGE'

let defaultState = {
    login: null,
    password: null,
    tokenAuth: localStorage.getItem('token'),
    isAuth: false,
    registerMessage: null,
    title: null,
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
        SET_TOKEN:
            return {
                ...state,
                tokenAuth: action.payload.tokenText
            }
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
export const loginAuth = (login, password) =>
    async (dispatch) => {
        try {
            const response = await authAPI.login(login, password)
            localStorage.setItem('token', response.data)
            dispatch(AuthReducer(true))

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
            dispatch(registerFailedMessageAC('Пользователь с таким логином уже есть'))
            console.log(error)
        }
    }

export default authReducer;