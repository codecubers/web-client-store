var SessionStorage = /** @class */ (function () {
    function SessionStorage() {
    }
    SessionStorage.prototype.checkEnbled = function () {
        return !(typeof Storage === "undefined");
    };
    SessionStorage.prototype.set = function (key, value) {
        if (key)
            sessionStorage.setItem(key, value);
    };
    SessionStorage.prototype.get = function (key) {
        return key ? sessionStorage.getItem(key) || "" : "";
    };
    SessionStorage.prototype.unset = function (key) {
        if (key)
            sessionStorage.removeItem(key);
    };
    SessionStorage.prototype.clear = function () {
        sessionStorage.clear();
    };
    return SessionStorage;
}());
export default SessionStorage;
//# sourceMappingURL=SessionStorage.js.map