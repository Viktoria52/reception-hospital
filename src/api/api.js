import axios from "axios";
import {setToken} from "../state/auth";

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
            .then(response => token)
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
    change(name='some Name',nameDoc, date, complaints,_id) {
        return instance.patch(`changeReception`, {
            name,
            nameDoc,
            date,
            complaints,
            _id
        }, {headers: { Authorization: `${token1}` }})
            // .then(response => response.data)
            .then(response => response)
    },
    delete(id) {
        return instance.delete(`deleteReception?id=` + id, {headers: { Authorization: `${token1}` }})
            .then(response => response.data)
    },
    sortDate(sortFrom, sortTo){
        return instance.get(`getSortRecDate?sortFrom=${sortFrom}&sortTo=${sortTo}`, {headers: { Authorization: `${token1}` }})
            .then(response => response.data)
    }
}