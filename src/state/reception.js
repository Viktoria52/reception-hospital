import {docsAPI, receptionAPI} from "../api/api";
import {setDocs} from "./doc";
const Moment = require('moment')

const ADD_RECEPTION = 'REC/ADD_RECEPTION'
const SET_ALL_RECEPTION = 'REC/SET_ALL_RECEPTION'
const CHANGE_RECEPTION = 'REC/CHANGE_RECEPTION'
// const DELETE_RECEPTION = 'REC/DELETE_RECEPTION'
const ID_EDIT_RECEPTION = 'REC/ID_EDIT_RECEPTION'
const DELETE_RECEPTION_ID = 'REC/DELETE_RECEPTION_ID'
// const RECEPTION_SORT = '/REC/RECEPTION_SORT'


let defaultState = {
    reception: [],
    // receptionSort: [],
    name: null,
    nameDoc: null,
    date: null,
    complaints: null,
    error: null,
    preloader: false,
    idEdit: null,
    id: null,
    idDelete: null

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
                reception: action.payload.rec,

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
            case DELETE_RECEPTION_ID:
            return {
                ...state,
              idDelete: action.payload.text
            }
        // case RECEPTION_SORT:
        //     return {
        //         ...state,
        //       reception: state.reception.sort((a, b) => new Moment(a.date).format('YYYYMMDD') - new Moment(b.date).format('YYYYMMDD'))}

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

export const setReception = (rec, receptionSort) => {
    return {
        type: SET_ALL_RECEPTION,
        payload: {rec,receptionSort}
    }
}
// export const sortReception = () => {
//     return {
//         type: RECEPTION_SORT,
//         payload: {}
//     }
// }

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
export const deleteReceptionAC = (text) => {
    return {
        type: DELETE_RECEPTION_ID,
        payload: {text}
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
        console.log(response)

    }
}


export default receptionReducer;
