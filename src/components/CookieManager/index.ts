import Cookies from 'universal-cookie';

interface CookieInterface {
    cookie: any
}

class CookieManager implements CookieInterface {
    cookie: any;

    constructor(cookieHeader?: string) {
        this.cookie = new Cookies(cookieHeader);

        this.getCookie.bind(this);
        this.getAllRaw.bind(this);
        this.checkCookie.bind(this);
        this.setCookie.bind(this);
        this.removeCookie.bind(this);
    }

    _setOptions(options) {
        return {
            path: '/',
            ...options
        }
    }

    getCookie(name: string) {
        let cookie = this.checkCookie(name);
        if (cookie) {
            this.removeCookie(name);
        }
        return cookie;
    }

    getAllRaw() {
        return this.cookie.getAll({ doNotParse: true })
    }

    checkCookie(name: string) {
        return this.cookie.get(name);
    }

    setCookie(key: string, value: any, options?: any) {
        return this.cookie.set(key, value, this._setOptions(options))
    }

    removeCookie(key: string, options?: any) {
        return this.cookie.remove(key, this._setOptions(options))
    }
}

export default CookieManager;