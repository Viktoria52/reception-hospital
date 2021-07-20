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
        localStorage.setItem('token', result)
        return response
    }

    async register(login, password, url, headers) {
        const response = await fetch(this.baseUrl + url, {
            method: 'POST',
            body: JSON.stringify({login, password}),
            headers: headers
        });
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
        console.log('response', response)
        console.log('result:', result)
        const obj = {status: response.status, array: result}
        return obj
    }

}


const Service = new ApiService()
export default Service
