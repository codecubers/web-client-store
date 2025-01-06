import Cookies from "js-cookie";
var CookieStorage = /** @class */ (function () {
    function CookieStorage() {
    }
    CookieStorage.prototype.checkEnbled = function () {
        return navigator.cookieEnabled;
    };
    CookieStorage.prototype.set = function (key, value, options) {
        if (key)
            Cookies.set(key, value, options);
    };
    CookieStorage.prototype.get = function (key) {
        return key ? Cookies.get(key) || "" : "";
    };
    CookieStorage.prototype.unset = function (key, options) {
        if (key)
            Cookies.remove(key, options);
    };
    CookieStorage.prototype.getAll = function () {
        return Cookies.get();
    };
    return CookieStorage;
}());
export default CookieStorage;
//# sourceMappingURL=CookieStorage.js.map