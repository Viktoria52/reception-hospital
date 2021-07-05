import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:3000/",
    headers:{
        "Authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwZGQ4OTA3ZTQ3ZDhhMjc0Y2ZlOTZjMCIsImlhdCI6MTYyNTQ3NjcxMCwiZXhwIjoxNjI1NTYzMTEwfQ.nIuSAHmg8oNZumkeYLhGUitWKPixQqjETBoj1AkaFbM"
    }
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
    add(name, nameDoc, date, complaints) {
        return instance.put(`addReception`, {
            name,
            nameDoc,
            date,
            complaints
        })
            .then(response => response.data)
    },
    change(name,nameDoc, date, complaints) {
        return instance.patch(`changeReception`, {
            name,
            nameDoc,
            date,
            complaints
        })
            .then(response => response.data)
    },
    delete(id) {
        return instance.delete(`deleteReception${id}` )
            .then(response => response.data)
    },
}