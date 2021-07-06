import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:3000/",
})

let token = ''
let token1 = localStorage.getItem('token')

export const authAPI = {
    login(login, password, token) {
        return instance.post(`login`, {login, password},)
            .then(response => response.data)
            .then(response => token = response.token)
            .then(response => localStorage.setItem('token', token))
    },
    register(login, password) {
        return instance.post(`register`, {login, password},
            {headers: {"Content-type": "application/json"}})
            .then(response => response.data)

    }
}

export const docsAPI = {
    getDocs(){
        return instance.get('getDocs', {headers: { Authorization: token1 }})
            .then(response => response.data)
    }
}

export const receptionAPI = {
    getAll() {
        return instance.get(`getAllReception`, {headers: { Authorization: token1 }})
            .then(response => response.data)
    },
    add(name, nameDoc, date, complaints) {
        return instance.put(`addReception`, {
            name,
            nameDoc,
            date,
            complaints
        }, {headers: { Authorization: `${token1}` }})
            .then(response => response.data)
    },
    change(name,nameDoc, date, complaints,_id="12") {
        return instance.patch(`changeReception`, {
            name,
            nameDoc,
            date,
            complaints,
            _id
        }, {headers: { Authorization: `${token1}` }})
            .then(response => response.data)
    },
    delete(id) {
        console.log(id)
        return instance.delete(`deleteReception?id=` + id, {headers: { Authorization: `${token1}` }})
            .then(response => response.data)
    },
}