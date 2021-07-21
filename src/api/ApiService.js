import jwtServise from "./tokenServise";

class ApiService {
    constructor(baseUrl = "http://localhost:3000/", baseOptions = {Authorization: localStorage.getItem('token')}) {
        this.baseUrl = baseUrl
        this.baseOptions = baseOptions
    }

    async login(login, password, url, headers) {
        const response = await fetch(this.baseUrl + url, {
            method: 'POST',
            body: JSON.stringify({login, password}),
            headers: headers
        });
        let result = await response.json()
        if (response.status === 200) {
            jwtServise.setToken(result)
        }
        const obj = {response, result}
        return obj
    }

    async register(login, password, url, headers) {
        const response = await fetch(this.baseUrl + url, {
            method: 'POST',
            body: JSON.stringify({login, password}),
            headers: headers
        });
        console.log(response)
        const result = await response.json()
        const obj = {response, result}
        return obj
    }

    async getReceptionAPI(url, headers) {
        const response = await fetch(this.baseUrl + url, {
            method: 'GET',
            headers: headers
        });
        const result = await response.json()
        const obj = {status: response.status, array: result.data}
        return obj
    }

    async newReceptionAPI(name, nameDoc, date, complaints, url, headers) {
        const response = await fetch(this.baseUrl + url, {
            method: 'PUT',
            body: JSON.stringify({name, nameDoc, date, complaints}),
            headers: headers
        });

        const result = await response.json()
        const obj = {status: response.status, array: result}
        return obj
    }

    async ChangeReceptionAPI(name, nameDoc, date, complaints, _id, url, headers) {
        const response = await fetch(this.baseUrl + url, {
            method: 'PATCH',
            body: JSON.stringify({name, nameDoc, date, complaints, _id}),
            headers: headers
        });

        const result = await response.json()
        const obj = {status: response.status, array: result}
        return obj
    }

    async DeleteReceptionAPI(url, headers) {
        const response = await fetch(this.baseUrl + url, {
            method: 'DELETE',
            headers: headers
        });

        const result = await response.json()
        const obj = {status: response.status, message: result}
        return obj
    }

    async getSortDataAPI(url, headers) {
        const response = await fetch(this.baseUrl + url, {
            method: 'GET',
            headers: headers
        });

        const result = await response.json()
        const obj = {status: response.status, array: result.data}
        return obj
    }

    async getSortNameAPI(url, headers) {
        const response = await fetch(this.baseUrl + url, {
            method: 'GET',
            headers: headers
        });

        const result = await response.json()
        const obj = {status: response.status, array: result.data}
        return obj
    }

    async getSortNameDocAPI(url, headers) {
        const response = await fetch(this.baseUrl + url, {
            method: 'GET',
            headers: headers
        });

        const result = await response.json()
        const obj = {status: response.status, array: result.data}
        return obj
    }

    async getDocsAPI(url, headers) {
        const response = await fetch(this.baseUrl + url, {
            method: 'GET',
            headers: headers
        });
        const result = await response.json()
        const obj = {status: response.status, array: result.data}
        return obj
    }
}

const Service = new ApiService()
export default Service
