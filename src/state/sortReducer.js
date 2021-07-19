import {getDocs} from "./docReducer";
import {getReceptions, setReception} from "./receptionReducer";
import {receptionAPI} from "../api/api";

const SORT_VALUE = 'SORT/SORT_VALUE';
const SORTING_VALUE = 'SORT/SORTING_VALUE';

let InitialState = {
    valueOption: null, // какое поле сортируется
    valueSorting: null // тип сортировки
}
const sortReducer = (state = InitialState, action) => {
    switch (action.type) {
        case SORT_VALUE:
            return {
                ...state,
                valueOption:action.text
            }
            case SORTING_VALUE:
            return {
                ...state,
                valueSorting:action.text
            };
        default: return state;
    }
}

export const sortValueAC = (text) => {
    return { type: SORT_VALUE, text } }

export const triage = (text) => {
    return { type: SORTING_VALUE, text } }



export default sortReducer

