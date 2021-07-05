import {docsAPI, receptionAPI} from "../api/api";
import {setDocs} from "./doc";

const ADD_RECEPTION = 'REC/ADD_RECEPTION'
const SET_ALL_RECEPTION = 'REC/SET_ALL_RECEPTION'
const CHANGE_RECEPTION = 'REC/CHANGE_RECEPTION'
const DELETE_RECEPTION = 'REC/DELETE_RECEPTION'


let defaultState = {
    reception: [],
    name: null,
    nameDoc: null,
    date: null,
    complaints: null,
    error: null
}
const receptionReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_RECEPTION:
            return {
                ...state
            }
        case SET_ALL_RECEPTION:
            return {
                ...state,
                reception: action.payload.rec
            }
            case DELETE_RECEPTION:
            return {
                ...state,

            }
        default:
            return state

    }
}

export const addReceptionCreator = (name, lastName, patronymic, nameDoc, lastNameDoc, patronymicDoc, date, complaints) => {
    return {
        type: ADD_RECEPTION,
        payload: {name, lastName, patronymic, nameDoc, lastNameDoc, patronymicDoc, date, complaints}
    }
}

export const setReception = (rec) => {
    return {
        type: SET_ALL_RECEPTION,
        payload: {rec}
    }
}

export const changeReceptionAC = (name, nameDoc, date, complaints) => {
    return {
        type: CHANGE_RECEPTION,
        payload: {name, nameDoc, date, complaints}
    }
}


export const getReceptions = () => {
    return (dispatch) => {
        receptionAPI.getAll().then(data => {
            dispatch(setReception(data.data));
        })
    }
}

export const newReception = (name, nameDoc, date, complaints) => {
    return(dispatch) => {
        receptionAPI.add(name, nameDoc, date, complaints).then(data =>{
            dispatch(addReceptionCreator(data.data))
        })
    }
}

export const changeReception = (name, nameDoc, date, complaints) => {
    return(dispatch) => {
        receptionAPI.change().then(date => {

        })
    }
}



export default receptionReducer;
