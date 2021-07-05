import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:3000/",
    // headers:{
    //     "Authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwZGMxYTRhYjdlNWY4MmQ5MjhhNWRjMyIsImlhdCI6MTYyNTAzNzM5NywiZXhwIjoxNjI1MTIzNzk3fQ.JWgIWxxgk1AP7Iwbp6FSpTbaPumb9tg8r9bJgKETgLs"
    // }
})

export const authAPI = {
    login(login, password) {
        return instance.post(`login`, {login, password})
            .then(response => response.data)
    },
    register(login, password) {
        return instance.post(`register`, {login, password},
            {headers: {"Content-type": "application/json"}})
            .then(response => response.data)
    }
}

export const docsAPI = {
    getDocs(){
        return instance.get('getDocs')
            .then(response => response.data)
    }
}

export const receptionAPI = {
    getAll() {
        return instance.get(`getAllReception`, {})
            .then(response => response.data)
    },
    add(name, lastName, patronymic, nameDoc, lastNameDoc, patronymicDoc, date, complaints) {
        return instance.put(`addReception`, {
            name,
            lastName,
            patronymic,
            nameDoc,
            lastNameDoc,
            patronymicDoc,
            date,
            complaints
        })
            .then(response => response.data)
    },
    change(name, lastName, patronymic, nameDoc, lastNameDoc, patronymicDoc, date, complaints) {
        return instance.patch(`changeReception`, {
            name,
            lastName,
            patronymic,
            nameDoc,
            lastNameDoc,
            patronymicDoc,
            date,
            complaints
        })
            .then(response => response.data)
    },
    delete(id) {
        return instance.delete(`deleteReception=` + id)
            .then(response => response.data)
    },
}