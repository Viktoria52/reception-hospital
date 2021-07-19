import {docsAPI} from "../api/api";
import {preloaderAC} from "./receptionReducer";

const GET_DOCS = 'REC/GET_DOCS'

let defaultState = {
    docs: []
}

const docReducer = (state = defaultState, action) => {
    switch (action.type) {
        case GET_DOCS:
            return {
                ...state,
                docs: action.docs,
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

export const getDocs = () =>
    async (dispatch) => {
        dispatch(preloaderAC( true))
        try {
            const response = await docsAPI.getDocs()
            if (response.status === 200) {
                dispatch(setDocs(response.data.data));
            }
        } catch (err) {
            console.log(err)
            localStorage.removeItem('token')
        }
    }

export default docReducer;
