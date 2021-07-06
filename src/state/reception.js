import {docsAPI, receptionAPI} from "../api/api";
import {setDocs} from "./doc";

const ADD_RECEPTION = 'REC/ADD_RECEPTION'
const SET_ALL_RECEPTION = 'REC/SET_ALL_RECEPTION'
const CHANGE_RECEPTION = 'REC/CHANGE_RECEPTION'
const DELETE_RECEPTION = 'REC/DELETE_RECEPTION'
const ID_EDIT_RECEPTION = 'REC/ID_EDIT_RECEPTION'


let defaultState = {
    reception: [],
    name: null,
    nameDoc: null,
    date: null,
    complaints: null,
    error: null,
    preloader: false,
    idEdit: null,
    id: null

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
        case ID_EDIT_RECEPTION:
            return {
                ...state,
                idEdit: action.payload.id
            }
        case CHANGE_RECEPTION:
            return {
                ...state,
                name: action.payload.name,
                nameDoc: action.payload.nameDoc,
                date: action.payload.date,
                complaints: action.payload.complaints,
                id: action.payload.id
            }
        default:
            return state

    }
}

export const addReceptionCreator = (name, nameDoc, date, complaints) => {
    return {
        type: ADD_RECEPTION,
        payload: {name, nameDoc, date, complaints}
    }
}

export const setReception = (rec) => {
    return {
        type: SET_ALL_RECEPTION,
        payload: {rec}
    }
}

export const changeReceptionAC = (name, nameDoc, date, complaints,id) => {
    return {
        type: CHANGE_RECEPTION,
        payload: {name, nameDoc, date, complaints,id}
    }
}

export const idEditReception = (id) => {
    return {
        type: ID_EDIT_RECEPTION,
        payload: {id}
    }
}


export const getReceptions = () => {
    return async dispatch => {
        // defaultState.preloader = true
        let response = await receptionAPI.getAll()
        // defaultState.preloader = false
        dispatch(setReception(response.data));
    }
}

export const newReception = (name, nameDoc, date, complaints) => {
    return (dispatch) => {
        defaultState.preloader = true
        receptionAPI.add(name, nameDoc, date, complaints).then(data => {
            defaultState.preloader = false
            dispatch(addReceptionCreator(data.data))
        })
    }
}

export const changeReception = (name, nameDoc, date, complaints,id) => {
    return async (dispatch) => {
        let response = await receptionAPI.change(name, nameDoc, date, complaints,id)
        dispatch(changeReceptionAC(response.name, response.nameDoc, response.date, response.complaints, id))

    }
}

export const deleteReception = (id) => {
    return async dispatch => {
        let response = await receptionAPI.delete(id)
        console.log(response.statusCode)

    }
}


export default receptionReducer;
