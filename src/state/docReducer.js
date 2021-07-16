import {docsAPI} from "../api/api";

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
        try {
            const response = await docsAPI.getDocs()
            if (response.status === 200) {
                dispatch(setDocs(response.data.data));
            }
        } catch (err) {
            console.log(err)
        }
    }

export default docReducer;
