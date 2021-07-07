import {getDocs} from "./doc";
import {getReceptions} from "./reception";

const SORT_VALUE = 'SORT/SORT_VALUE';

let InitialState = {
    valueOption: '',
}
const sortReducer = (state = InitialState, action) => {
    switch (action.type) {
        case SORT_VALUE:
            return {
                ...state,
                valueOption:action.value
            };
        default: return state;
    }
}

export const sortValueAC = (value) => {
    console.log('value', value)
    return { type: SORT_VALUE, value:value } }

export default sortReducer

