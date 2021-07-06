interface CookieInterface {
    cookie: any;
}
declare class CookieManager implements CookieInterface {
    cookie: any;
    constructor(cookieHeader?: string);
    _setOptions(options: any): any;
    getCookie(name: string): any;
    getAllRaw(): any;
    checkCookie(name: string): any;
    setCookie(key: string, value: any, options?: any): any;
    removeCookie(key: string, options?: any): any;
}
export default CookieManager;
