class typeButtonService {
    constructor(typeAuth='typeAuth') {

        this.typeAuth = typeAuth
        this.subs = []
    }

    getType() {
        return localStorage.getItem('typeAuth')
    }
    subscribe(callback) {
        this.subs.push(callback)
        return this.getType()
    }

    setType(typeAuth) {
        this.typeAuth = typeAuth
        localStorage.setItem('typeAuth', this.typeAuth)
        this.subs.forEach((subscriber) => subscriber(this.typeAuth))
    }

    removeType() {
        localStorage.removeItem('typeAuth')
        this.subs.forEach((subscriber) => subscriber(this.typeAuth))
    }
}
const buttonServ = new typeButtonService()

export default buttonServ