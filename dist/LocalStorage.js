var LocalStorage = /** @class */ (function () {
    function LocalStorage() {
    }
    LocalStorage.prototype.checkEnbled = function () {
        return !(typeof Storage === "undefined");
    };
    LocalStorage.prototype.set = function (key, value) {
        if (key)
            localStorage.setItem(key, value);
    };
    LocalStorage.prototype.get = function (key) {
        return key ? localStorage.getItem(key) || "" : "";
    };
    LocalStorage.prototype.unset = function (key) {
        if (key)
            localStorage.removeItem(key);
    };
    LocalStorage.prototype.clear = function () {
        localStorage.clear();
    };
    return LocalStorage;
}());
export default LocalStorage;
//# sourceMappingURL=LocalStorage.js.map