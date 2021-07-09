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
const SORT_DATE_RECEPTION = 'REC/SORT/DATE/RECEPTION'
const CHANGE_RECEPTION_ID = 'REC/CHANGE_RECEPTION_ID'


let defaultState = {
    reception: [],
    // receptionSort: [],
    // name: '12',
    // nameDoc: null,
    // date: null,
    // complaints: null,
    error: null,
    preloader: false,
    idEdit: null,
    id: null,
    idDelete: null,
    messageDeleteApi: null,
    idEditPost: null

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
            console.log(action)
            return {
                ...state,
                reception: [...state.reception.map((item) => {
                    if (item.id === action.payload.id) {
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

        case SORT_DATE_RECEPTION:
            return {
                ...state,
                reception: action.payload.array
            }
            case CHANGE_RECEPTION_ID:
            return {
                ...state,
                idEditPost: action.payload.id
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
        payload: {rec, receptionSort}
    }
}
// export const sortReception = () => {
//     return {
//         type: RECEPTION_SORT,
//         payload: {}
//     }
// }

export const changeReceptionAC = (name, nameDoc, date, complaints, id) => {
    console.log(name, nameDoc, date, complaints, id)
    return {
        type: CHANGE_RECEPTION,
        payload: {name, nameDoc, date, complaints, id}
    }
}

export const changeReceptionId = (id) => { // id for window!
    return{
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
export const deleteReceptionAC = (text, message) => {
    return {
        type: DELETE_RECEPTION_ID,
        payload: {text}
    }
}
export const sortToDate = (array) => {
    return {
        type: SORT_DATE_RECEPTION,
        payload: {array}
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

export const changeReception = (name, nameDoc, date, complaints, id) => {
    return async (dispatch) => {
        let response = await receptionAPI.change(name, nameDoc, date, complaints, id)
        console.log(response)
        dispatch(changeReceptionAC(response.name, response.nameDoc, response.date, response.complaints, id))
    }
}

export const deleteReception = (id) => {
    return async dispatch => {
        let response = await receptionAPI.delete(id)
        console.log(response)
    }
}

export const getSortData = (sortFrom, sortTo) => {
    return async (dispatch) => {
        let response = await receptionAPI.sortDate(sortFrom, sortTo)
        await dispatch(sortToDate(response.data));
    }
}


export default receptionReducer;
