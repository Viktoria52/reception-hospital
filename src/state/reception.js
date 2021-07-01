const ADD_RECEPTION = 'REC/ADD_RECEPTION'


let defaultState = {
    name: null,
    lastName: null,
    patronymic: null,
    nameDoc: null,
    lastNameDoc: null,
    patronymicDoc: null,
    date: null,
    complaints: null,

    error: null
}
const receptionReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_RECEPTION:
            return {
                ...state
            }

        default:
            return state

    }
}

export const addReception = (name, lastName, patronymic, nameDoc, lastNameDoc, patronymicDoc, date, complaints) => {
    return {
        type: ADD_RECEPTION,
        payload: {name, lastName, patronymic, nameDoc, lastNameDoc, patronymicDoc, date, complaints}
    }
}

export default receptionReducer;
