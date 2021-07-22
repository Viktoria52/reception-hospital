const SORT_VALUE = 'SORT/SORT_VALUE';

let InitialState = {
    valueOption: null // тип сортировки
}
const sortReducer = (state = InitialState, action) => {
    switch (action.type) {
        case SORT_VALUE:
            return {
                ...state,
                valueOption:action.text
            }
        default: return state;
    }
}
export const sortValueAC = (text) => {
    return { type: SORT_VALUE, text } }

export default sortReducer

