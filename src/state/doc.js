import {docsAPI} from "../api/api";

const GET_DOCS = 'REC/ADD_RECEPTION'

let defaultState = {
    docs: []
}


const docReducer = (state = defaultState, action) => {
    switch (action.type) {
        case GET_DOCS:
            console.log(state.docs)
            return {
                ...state, docs: action.nameDoc
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
            dispatch(setDocs(data.name));

        })
    }
}

export default docReducer;
