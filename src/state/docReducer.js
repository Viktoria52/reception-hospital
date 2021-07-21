import {preloaderAC} from "./receptionReducer";
import Service from "../api/ApiService";
import jwtServise from "../api/tokenServise";

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
        dispatch(preloaderAC(true))
        try {
            const response = await Service.getDocsAPI('getDocs', {Authorization: jwtServise.getToken()})
            if (response.status === 200) {
                dispatch(setDocs(response.array));
            }
        } catch (err) {
            console.log(err)
        }
    }

export default docReducer;
