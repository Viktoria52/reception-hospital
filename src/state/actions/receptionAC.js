import {
    ADD_RECEPTION,
    CHANGE_RECEPTION,
    CHANGE_RECEPTION_ARRAY, DELETE_FROM_ARRAY, DELETE_MODE,
    DELETE_RECEPTION_ID, EDIT_MODE, MESSAGE_TASK_CREATED, PRELOADER, PRELOADER_DELETE,
    SET_ALL_RECEPTION, SORT_DATE_RECEPTION, SORT_NAME, SORT_NAME_DOC
} from "./receptionAction";


export const addReceptionCreator = (payload) => {
    return {
        type: ADD_RECEPTION,
        payload
    }
}

export const setReception = (response) => {
    return {
        type: SET_ALL_RECEPTION,
        response
    }
}

export const changeReceptionAC = (name, nameDoc, date, complaints, id) => {
    return {
        type: CHANGE_RECEPTION,
        payload: {name, nameDoc, date, complaints, id}
    }
}
export const changeReceptionArray = (name, nameDoc, date, complaints, id) => {
    return {
        type: CHANGE_RECEPTION_ARRAY,
        payload: {name, nameDoc, date, complaints, id}
    }
}


export const deleteReceptionAC = (text) => {
    return {
        type: DELETE_RECEPTION_ID,
        payload: {text}
    }
}
export const deleteFromArray = (idRec) => {
    return {
        type: DELETE_FROM_ARRAY,
        payload: {idRec}
    }
}

export const sortToDate = (array) => {
    return {
        type: SORT_DATE_RECEPTION,
        payload: {array}
    }
}
export const sortToName = (array) => {
    return {
        type: SORT_NAME,
        array
    }
}
export const sortToNameDoc = (array) => {
    return {
        type: SORT_NAME_DOC,
        array
    }
}
export const setEditMode = (flag) => {
    return {
        type: EDIT_MODE,
        flag
    }
}
export const setDeleteMode = (flag) => {
    return {
        type: DELETE_MODE,
        flag
    }
}
export const preloaderAC = (bool) => {
    return {
        type: PRELOADER,
        bool
    }
}
export const preloaderDeleteAC = (bool) => {
    return {
        type: PRELOADER_DELETE,
        bool
    }
}
export const messageTaskCreated = (message) => {
    return {
        type: MESSAGE_TASK_CREATED,
        message
    }
}
