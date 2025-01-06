import DefaultClientStore from "./DefaultClientStore";
var CacheStorage = /** @class */ (function () {
    function CacheStorage() {
        var _this = this;
        this._index = DefaultClientStore.getIndexStore();
        this._local = DefaultClientStore.getSelectedStore([1 /* Local */]);
        this._isCached = function (key) {
            var check = _this._local.get(key);
            return check ? true : false;
        };
    }
    CacheStorage.prototype.checkEnbled = function () {
        return this._index.checkEnbled();
    };
    CacheStorage.prototype.setAsync = function (key, value) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            return _this._index
                .setAsync(key, value)
                .then(function (value) {
                _this._local.set(key, new Date().getTime().toString());
                resolve(value);
            })
                .catch(function (err) { return reject(err); });
        });
    };
    CacheStorage.prototype.getAsync = function (key) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (!_this._isCached(key)) {
                reject("key " + key + " not cached yet. Fetch and cache.");
            }
            else {
                return _this._index
                    .getAsync(key)
                    .then(function (value) {
                    if (value) {
                        resolve(value);
                    }
                    else {
                        reject("empty cache value found for the key " + key);
                    }
                })
                    .catch(function (err) { return reject(err); });
            }
        });
    };
    CacheStorage.prototype.unsetAsync = function (key) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            return _this._index
                .unsetAsync(key)
                .then(function () {
                _this._local.unset(key);
                resolve();
            })
                .catch(function (err) { return reject(err); });
        });
    };
    CacheStorage.prototype.isCached = function (key) {
        return this._isCached(key);
    };
    CacheStorage.prototype.getCacheAge = function (key) {
        if (!this._isCached(key))
            return -2;
        var _ageSec = -1;
        try {
            var _val = Number(this._local.get(key));
            _ageSec = Math.floor((new Date().getTime() - _val) / 1000);
        }
        catch (error) {
            console.warn("Error while determining cached age of the key " + key + " from value " + this._local.get(key));
            console.error(error);
        }
        return _ageSec;
    };
    return CacheStorage;
}());
export default CacheStorage;
//# sourceMappingURL=CacheStorage.js.map