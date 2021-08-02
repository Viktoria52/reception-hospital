import Service from "../api/ApiService";
import jwtServise from "../api/tokenServise";
import {
    ADD_RECEPTION,
    CHANGE_RECEPTION,
    CHANGE_RECEPTION_ARRAY, DELETE_FROM_ARRAY, DELETE_MODE, DELETE_RECEPTION_ID, EDIT_MODE,
    MESSAGE_TASK_CREATED, PRELOADER, PRELOADER_DELETE,
    SET_ALL_RECEPTION, SORT_DATE_RECEPTION, SORT_NAME, SORT_NAME_DOC
} from "./actions/receptionAction";
import {
    addReceptionCreator,
    changeReceptionAC, changeReceptionArray, deleteFromArray,
    messageTaskCreated,
    preloaderAC, preloaderDeleteAC,
    setReception, sortToDate, sortToName, sortToNameDoc
} from "./actions/receptionAC";
import {useSelector} from "react-redux";

let defaultState = {
    reception: [],
    name: null,
    nameDoc: null,
    date: null,
    complaints: null,
    error: null,
    id: null,
    idDelete: null,
    messageDeleteApi: null,
    flagEdit: false,
    flagDelete: false,
    preloader: false,
    preloaderDelete: false,
    messageTaskCreated: false

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
                reception: action.response,
                preloader: false
            }
        case CHANGE_RECEPTION: //данные для редактрования
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
        case PRELOADER:
            return {
                ...state,
                preloader: action.bool
            }
        case PRELOADER_DELETE:
            return {
                ...state,
                preloaderDelete: action.bool
            }
            case MESSAGE_TASK_CREATED:
            return {
                ...state,
                messageTaskCreated: action.message
            }

        default:
            return state

    }
}



export const getReceptions = () => async dispatch => {
    dispatch(preloaderAC(true))
    try {
        const response = await Service.getReceptionAPI('getAllReception', {Authorization: jwtServise.getToken()})
        if (response.status === 200) {
            dispatch(setReception(response.array));
        }
        if (response.status === 403) {
            localStorage.removeItem('token')
        }
    } catch (error) {
        console.log(error.errorDesc)
    }
    dispatch(preloaderAC(false))
}

export const newReception = (name, nameDoc, date, complaints) => async (dispatch) => {
    dispatch(preloaderAC(true))
    const response = await Service.newReceptionAPI(name, nameDoc, date, complaints, 'addReception', {
        Authorization: jwtServise.getToken(),
        "Content-type": "application/json"
    })
    if (response.status === 200) {
        dispatch(messageTaskCreated(true))
        dispatch(addReceptionCreator(response.array))
    }
    dispatch(preloaderAC(false))
}

export const changeReception = (name, nameDoc, date, complaints, _id) => async (dispatch) => {
    dispatch(preloaderAC(true))

    const response = await Service.ChangeReceptionAPI(name, nameDoc, date, complaints, _id,
        'changeReception', {
            Authorization: jwtServise.getToken(),
            "Content-type": "application/json"
        })
    if (response.status === 200) {
        response.array.map((value) => {
                dispatch(changeReceptionAC(value.name, value.nameDoc, value.date, value.complaints, _id))
                dispatch(changeReceptionArray(value.name, value.nameDoc, value.date, value.complaints, _id))
                return value
            }
        )
        dispatch(preloaderAC(false))
    }
}

export const deleteReception = (id) =>
    async (dispatch) => {
        dispatch(preloaderDeleteAC(true))
        const response = await Service.DeleteReceptionAPI(
            `deleteReception?id=${id}`,
            {Authorization: jwtServise.getToken()})
        if (response.status === 200) {
            dispatch(deleteFromArray(id))
        }
        dispatch(preloaderDeleteAC(false))
    }

export const getSortData = (sortFrom, sortTo) =>
    async (dispatch) => {
        dispatch(preloaderAC(true))
        const response = await Service.getSortDataAPI(`getSortRecDate?sortFrom=${sortFrom}&sortTo=${sortTo}`, {Authorization: jwtServise.getToken()})
        if (response.status === 200) {
            await dispatch(sortToDate(response.array));
            dispatch(preloaderAC(false))
        }
    }
export const getSortName = (valueSort) =>

    async (dispatch) => {
        dispatch(preloaderAC(true))
        const response = await Service.getSortNameAPI(`getSortName?valueSort=${valueSort}`, {Authorization: jwtServise.getToken()})
        if (response.status === 200) {
            await dispatch(sortToName(response.array));
        }
        dispatch(preloaderAC(false))
    }

export const getSortNameDoc = (valueSort) =>
    async (dispatch) => {
        const response = await Service.getSortNameDocAPI(`getSortNameDoctors?valueSort=${valueSort}`, {Authorization: jwtServise.getToken()})
        if (response.status === 200) {
            await dispatch(sortToNameDoc(response.array));
        }
    }

export default receptionReducer;
