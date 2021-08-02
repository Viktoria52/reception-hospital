import Service from "../api/ApiService";
import tokenServise from "../api/tokenServise";
import {
    AuthReducer,
    CLEAN_ERRORS, cleanErrors,
    FAILED_REGISTER_MESSAGE,
    LOGIN_FAILED_MESSAGE,
    loginFailedMessageAC,
    PASSWORD_FAILED_MESSAGE,
    passwordFailedMessageAC,
    REGISTER_PASSWORD_ERRORS, registerFailedMessageAC, registerPasswordErrors,
    SET_AUTH,
    SET_REGISTER_MESSAGE,
    SET_TITLE, setRegisterMessage,
} from "./actions/authActions";
import {preloaderAC} from "./actions/receptionAC";

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
    passwordFailMessage: null,
    // googleIdentificator: null,
    // typeAuth: String
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
        // case
        // GOOGLE_ID:
        //     return {
        //         ...state,
        //         googleIdentificator: action.id
        //     }
        //     case
        // TYPE_AUTH:
        //     return {
        //         ...state,
        //         typeAuth: action.auth
        //     }
        default:
            return state

    }
}

export const loginAuth = (login, password) =>
    async (dispatch) => {
        dispatch(preloaderAC(true))
        try {
            const response = await Service.login(login, password, 'login', {"Content-type": "application/json"})
            if (response.response.status === 200) {
                dispatch(AuthReducer(true))
                dispatch(loginFailedMessageAC(null))
                dispatch(passwordFailedMessageAC(null))
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

export const registerWithGoogle = (login, googleId) => // NEW!
    async (dispatch) => {
        dispatch(preloaderAC(true))
        try {
            const response = await Service.registerGoogle(`GoogleData`, login, googleId, {
                "Content-type": "application/json; charset=utf-8",
                "Access-Control-Allow-Origin": "*"
            })
            if (response === 200) {
                dispatch(AuthReducer(true))
            }
            // dispatch(setGoogleId(googleId))
        } catch (error) {
            console.log(error)
        }
        dispatch(preloaderAC(false))
    }


export default authReducer;