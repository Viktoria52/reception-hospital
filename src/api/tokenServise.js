class TokenService {
    constructor(token, subs) {
        // localStorage.setItem('token', response.data)
        this.token = token
        this.subs = []
    }

    getToken() {
        localStorage.getItem('token')
        // return this.token
    }

    subscribe(callback) {
        this.subs.push(callback)
    }

    setToken(token) {
        this.token = token
        localStorage.setItem('token', token)
        this.subs.forEach((item) => item(this.token))
    }

    removeToken() {
        this.token = null
        localStorage.removeItem('token')
        this.subs.forEach((subscriber) => subscriber(this.token))
    }
}

export default TokenService