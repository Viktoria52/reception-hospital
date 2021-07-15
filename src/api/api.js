import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:3000/",
})

let token1 = () => localStorage.getItem('token')

export const authAPI = {
    login(login, password) {
        return instance.post(`login`, {login, password}, {headers: {"Content-type": "application/json"}})
            .then(response => response)
    },
    register(login, password) {
        return instance.post(`register`, {login, password},
            {headers: {"Content-type": "application/json"}})
            .then(response => response)
    }
}

export const docsAPI = {
    getDocs(){
        return instance.get('getDocs', {headers: { Authorization: token1() }})
            .then(response => response)
    }
}

export const receptionAPI = {
    getAll() {
        return instance.get(`getAllReception`, {headers: { Authorization: token1() }})
            .then(response => response)

    },
    add(name, nameDoc, date, complaints) {
        return instance.put(`addReception`, {
            name,
            nameDoc,
            date,
            complaints
        }, {headers: { Authorization: `${token1()}` }})
            .then(response => response)
    },
    change(name='some Name',nameDoc, date, complaints,_id) {
        return instance.patch(`changeReception`, {
            name,
            nameDoc,
            date,
            complaints,
            _id
        }, {headers: { Authorization: `${token1()}` }})
            // .then(response => response.data)
            .then(response => response)
    },
    delete(id) {
        return instance.delete(`deleteReception?id=` + id, {headers: { Authorization: `${token1()}` }})
            .then(response => response)
    },
    sortDate(sortFrom, sortTo){
        return instance.get(`getSortRecDate?sortFrom=${sortFrom}&sortTo=${sortTo}`, {headers: { Authorization: `${token1()}` }})
            .then(response => response)
    } ,
    sortName(valueSort){
        return instance.get(`getSortName?valueSort=${valueSort}`, {headers: { Authorization: `${token1()}` }})
            .then(response => response)
    },
    sortNameDoc(valueSort){
        return instance.get(`getSortNameDoctors?valueSort=${valueSort}`, {headers: { Authorization: `${token1()}` }})
            .then(response => response)
    }

}