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
        try {
            const response = await fetch(this.baseUrl + url, {
                method: 'POST',
                body: JSON.stringify({login, password}),
                headers: headers
            });
            const result = await response.json()
            const obj = {response, result}
            return obj
        } catch (error) {
            console.log(error)
        }

    }

    async authGoogle(url, headers) {
        try {
            const response = await fetch('http://localhost:3000/auth/google', {
                method: 'GET',
                mode: "cors",
                redirect: 'follow',
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    // "Content-type": "application/json; charset=UTF-8",
                    "Accept": "*/*",
                    // Origin: 'https://www.googleapis.com'
                    //     "Origin": "https://localhost:3001",
                    // referrer:'no-referrer'
                }
            });
            // const {token} = useQuery("token", response);
            // const result = await response.json()
            // const obj = {response, result}
            // return obj
            // return await response.json()
        } catch (error) {
            console.log(error)
        }

    }

    async getReceptionAPI(url, headers) {
        const response = await fetch(this.baseUrl + url, {
            method: 'GET',
            headers: headers
        });
        if (response.status === 401) {
            jwtServise.removeToken()
        }
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
        if (response.status === 401) {
            jwtServise.removeToken()
        }
        const result = await response.json()
        const obj = {status: response.status, array: result.data}
        return obj
    }
}

const Service = new ApiService()
export default Service
