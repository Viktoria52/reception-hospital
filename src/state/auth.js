import {authAPI} from "../api/api";

const SET_USER = 'AUTH/SET_USER'
const ERROR_MESSAGE = 'AUTH/ERROR_MESSAGE'
const PASSWORD_TEXT = 'AUTH/PASSWORD_TEXT'
const PASSWORD_TEXT_REPEAT = 'AUTH/PASSWORD_TEXT_REPEAT'
const SET_TOKEN = 'AUTH/SET_TOKEN'
const SET_AUTH = 'AUTH/SET_AUTH'
const SET_REGISTER_MESSAGE = 'AUTH/SET_REGISTER_MESSAGE'
const SET_TITLE = 'AUTH/SET_TITLE'

let token1 = localStorage.getItem('token')

let defaultState = {
    login: null,
    password: null,
    error: null,
    passwordText: null,
    passwordTextRepeat: null,
    tokenAuth: token1,
    isAuth: false,
    registerMessage: null,
    title: null,
    loginLength: null
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


export const loginAuth = (login, password) =>
    async (dispatch) => {

        const response = await authAPI.login(login, password)
        await dispatch(setToken(response))
        await dispatch(Auth(true))
        // console.log(response)
        // if (data.statusCode === 200) {
        //     dispatch(setToken(data.token))
        // }
        // if (data.resultCode === 0) {
        //
        // } else {
        //     let message = data.error >0 ? 'Enter valid email or password' : 'error';
        //     console.log(message);
        //     dispatch(errorMessage(message))
        // }

    }

export const registerAuth = (login, password) =>
    async (dispatch) => {
        const response = await authAPI.register(login, password)
        if (response.status === 200) {
            console.log('ok!')
            dispatch(setRegisterMessage(response.data))
        }
        console.log(response.data)


    }

export default authReducer;