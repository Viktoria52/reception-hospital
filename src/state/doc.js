import {docsAPI} from "../api/api";

const GET_DOCS = 'REC/ADD_RECEPTION'

let defaultState = {
    docs: []
}


const docReducer = (state = defaultState, action) => {
    switch (action.type) {
        case GET_DOCS:
            return {
                ...state, docs: action.item
            }

        default:
            return state

    }
}

export const setDocs = (nameDoc) => {
    return {
        type: GET_DOCS,
        payload: {nameDoc}
    }
}

export const getDocs = () => {
    return (dispatch) => {

        docsAPI.getDocs().then(data => {
            console.log(data)
            dispatch(setDocs(data.items));

        })
    }
}

export default docReducer;
