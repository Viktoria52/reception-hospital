import {docsAPI} from "../api/api";

const GET_DOCS = 'REC/ADD_RECEPTION'

let defaultState = {
    docs: []
}

const docReducer = (state = defaultState, action) => {
    switch (action.type) {
        case GET_DOCS:
            return {
                ...state,
                docs: [...state.docs, action.docs],
            }
        default:
            return state
    }
}

export const setDocs = (docs) => {
    return {
        type: GET_DOCS, docs
    }
}

export const getDocs = () => {

    return (dispatch) => {
        docsAPI.getDocs()
            .then(response => {
            dispatch(setDocs(response.data));
        })
            .catch(err => console.log(err))
    }
}

export default docReducer;
