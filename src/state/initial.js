import {getDocs} from "./doc";
import {getReceptions} from "./reception";

const INITIALIZED = 'INITIALIZED';

let InitialState = {
    initial: false,
}
const appReducer = (state = InitialState, action) => {
    switch (action.type) {
        case INITIALIZED:
            return {
                ...state,
                initial:action.init

            };
        default: return state;
    };
}
export const InitializedSuccess = (init) => { return { type: INITIALIZED, init:init } }


export const Initialize = () => (dispatch) => {
    let promise = dispatch(getDocs(), getReceptions())

    Promise.all([promise])
        .then(() => {
                dispatch(InitializedSuccess(true))
            }
        )
}

export default appReducer;

