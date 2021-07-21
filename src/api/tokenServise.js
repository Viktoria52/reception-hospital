class TokenService {
    constructor(token='token') {
        // localStorage.setItem('token', response.data)
        this.token = token
        this.subs = []
    }

    getToken() {
       return localStorage.getItem('token')
        // return this.token
    }

    subscribe(callback) {
        this.subs.push(callback)
        return this.getToken()
    }

    setToken(token) {
        this.token = token
        localStorage.setItem('token', this.token)
        this.subs.forEach((subscriber) => subscriber(this.token))
    }

    removeToken() {
        localStorage.removeItem('token')
        this.subs.forEach((subscriber) => subscriber(this.token))
    }
}
const jwtServise = new TokenService()

export default jwtServise