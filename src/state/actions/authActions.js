export const SET_AUTH = 'AUTH/SET_AUTH'
export const SET_REGISTER_MESSAGE = 'AUTH/SET_REGISTER_MESSAGE'
export const SET_TITLE = 'AUTH/SET_TITLE'
export const FAILED_REGISTER_MESSAGE = 'AUTH/FAILED_REGISTER_MESSAGE'
export const LOGIN_FAILED_MESSAGE = 'AUTH/LOGIN_FAILED_MESSAGE'
export const REGISTER_PASSWORD_ERRORS = 'AUTH/REGISTER_PASSWORD_ERRORS'
export const CLEAN_ERRORS = 'AUTH/CLEAN_ERRORS'
export const PASSWORD_FAILED_MESSAGE = 'AUTH/PASSWORD_FAILED_MESSAGE'
// export const GOOGLE_ID = 'AUTH/GOOGLE_ID'
// export const TYPE_AUTH = 'AUTH/TYPE_AUTH'

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
// export const setGoogleId = (id) => {
//     return {type: GOOGLE_ID, id}
// }
// export const setTypeAuth = (auth) => {
//     return {type: TYPE_AUTH, auth}
// }
