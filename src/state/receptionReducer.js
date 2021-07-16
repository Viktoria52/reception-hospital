import {docsAPI, receptionAPI} from "../api/api";
import {setDocs} from "./docReducer";
import {loginAuth} from "./authReducer";

const Moment = require('moment')

const ADD_RECEPTION = 'REC/ADD_RECEPTION'
const SET_ALL_RECEPTION = 'REC/SET_ALL_RECEPTION'
const CHANGE_RECEPTION = 'REC/CHANGE_RECEPTION'
const CHANGE_RECEPTION_ARRAY = 'REC/CHANGE_RECEPTION_ARRAY'
const ID_EDIT_RECEPTION = 'REC/ID_EDIT_RECEPTION'
const DELETE_RECEPTION_ID = 'REC/DELETE_RECEPTION_ID'
const DELETE_FROM_ARRAY = 'REC/DELETE_FROM_ARRAY'
const SORT_DATE_RECEPTION = 'REC/SORT/DATE/RECEPTION'
const CHANGE_RECEPTION_ID = 'REC/CHANGE_RECEPTION_ID'
const SORT_NAME = 'REC/SORT_NAME'
const SORT_NAME_DOC = 'REC/SORT_NAME_DOC'
const EDIT_MODE = 'REC/EDIT_MODE'
const DELETE_MODE = 'REC/DELETE_MODE'
// const PRELOADER = 'REC/PRELOADER'


let defaultState = {
    reception: [],
    // receptionSort: [],
    name: null,
    nameDoc: null,
    date: null,
    complaints: null,
    error: null,
    // preloader: false,
    idEdit: null,
    id: null,
    idDelete: null,
    messageDeleteApi: null,
    idEditPost: null,
    flagEdit: false,
    flagDelete: false

}

const receptionReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_RECEPTION:
            return {
                ...state,
                reception: [...state.reception, action.payload],
            }
        case SET_ALL_RECEPTION:
            return {
                ...state,
                reception: action.response
            }
        case ID_EDIT_RECEPTION:
            return {
                ...state,
                idEdit: action.payload.id
            }
        case CHANGE_RECEPTION: //данные для редактррования
            return {
                ...state,
                name: action.payload.name,
                nameDoc: action.payload.nameDoc,
                date: action.payload.date,
                complaints: action.payload.complaints,
                id: action.payload.id
            }
        case CHANGE_RECEPTION_ARRAY: // само редактирование, ответ с сервера
            return {
                ...state,
                reception: [...state.reception.map((item) => {
                    if (item._id === action.payload.id) {
                        return {
                            ...item,
                            name: action.payload.name,
                            nameDoc: action.payload.nameDoc,
                            date: action.payload.date,
                            complaints: action.payload.complaints,
                        }
                    }
                    return item
                })],
            }
        case DELETE_RECEPTION_ID:
            return {
                ...state,
                idDelete: action.payload.text,
            }
        case DELETE_FROM_ARRAY:
            return {
                ...state,
                reception: [...state.reception.filter((item) => item._id !== action.payload.idRec)]
            }
        case SORT_DATE_RECEPTION:
            return {
                ...state,
                reception: action.payload.array
            }
        case SORT_NAME:
            return {
                ...state,
                reception: action.array
            }
        case SORT_NAME_DOC:
            return {
                ...state,
                reception: action.array
            }
        case CHANGE_RECEPTION_ID:
            return {
                ...state,
                idEditPost: action.payload.id
            }
            case EDIT_MODE:
            return {
                ...state,
                flagEdit: action.flag
            }
            case DELETE_MODE:
            return {
                ...state,
                flagDelete: action.flag
            }
        default:
            return state

    }
}

export const addReceptionCreator = (payload) => {
    // console.log(data)
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
// export const sortReception = () => {
//     return {
//         type: RECEPTION_SORT,
//         payload: {}
//     }
// }

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

export const changeReceptionId = (id) => { // id for window!
    // console.log(id)
    return {
        type: CHANGE_RECEPTION_ID,
        payload: {id}
    }
}

export const idEditReception = (id) => {
    return {
        type: ID_EDIT_RECEPTION,
        payload: {id}
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
// export const preloaderAC= (bool) => {
//     return {
//         type: PRELOADER,
//         bool
//     }
// }


export const getReceptions = () => {
    return async dispatch => {
        // await dispatch(preloaderAC( true))
        let response = await receptionAPI.getAll()
        if (response.status === 200) {
            dispatch(setReception(response.data.data));
        }
    }
}

export const newReception = (name, nameDoc, date, complaints) => {
    return async (dispatch) => {
        // defaultState.preloader = true
        const response = await receptionAPI.add(name, nameDoc, date, complaints)
        // defaultState.preloader = false
        if (response.status === 200) {
            dispatch(addReceptionCreator(response.data))
        }
    }
}

export const changeReception = (name = 'Anna', nameDoc, date, complaints = 'changed', _id) => {
    return async (dispatch) => {
        let response = await receptionAPI.change(name, nameDoc, date, complaints, _id)

        if (response.status === 200) {
            response.data.map((value) => {
                dispatch(changeReceptionAC(value.name, value.nameDoc, value.date, value.complaints, _id))
                dispatch(changeReceptionArray(value.name, value.nameDoc, value.date, value.complaints, _id))
            })
        }

    }
}

export const deleteReception = (id) => {
    return async dispatch => {
        let response = await receptionAPI.delete(id)
        if (response.status === 200) {
            dispatch(deleteFromArray(id))
        }
        // console.log(response)
    }
}

export const getSortData = (sortFrom, sortTo) => {
    return async (dispatch) => {
        let response = await receptionAPI.sortDate(sortFrom, sortTo)
        if (response.status === 200) {
            await dispatch(sortToDate(response.data.data));
        }
    }
}
export const getSortName = (valueSort) => {
    return async (dispatch) => {
        let response = await receptionAPI.sortName(valueSort)
        if (response.status === 200) {
            await dispatch(sortToName(response.data.data));
        }
    }
}
export const getSortNameDoc = (valueSort) => {
    return async (dispatch) => {
        let response = await receptionAPI.sortNameDoc(valueSort)
        if (response.status === 200) {
            await dispatch(sortToNameDoc(response.data.data));
        }
    }
}


export default receptionReducer;
