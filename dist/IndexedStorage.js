import * as localforage from "localforage";
var IndexedStorage = /** @class */ (function () {
    function IndexedStorage() {
    }
    IndexedStorage.prototype.checkEnbled = function () {
        return localforage.config() ? true : false;
    };
    // localforage:setItem<T>(key: string, value: T, callback?: (err: any, value: T) => void): Promise<T>;
    IndexedStorage.prototype.setAsync = function (key, value) {
        return new Promise(function (resolve, reject) {
            if (!key)
                return reject("web-client-store:Indexed:setAsync::key cannot be empty/undefined");
            return localforage.setItem(key, value, function (err, value) {
                if (err)
                    return reject("An error occured while storing the key " + key + " to IndexDb (localforage). Error: " + err.message);
                resolve(value);
            });
        });
    };
    // localforage:getItem<T>(key: string, callback?: (err: any, value: T | null) => void): Promise<T | null>;
    IndexedStorage.prototype.getAsync = function (key) {
        return new Promise(function (resolve, reject) {
            if (!key)
                return reject("web-client-store:Indexed:getAsync::key cannot be empty/undefined");
            return localforage.getItem(key, function (err, value) {
                if (err)
                    return reject("An error occured while retrieving the key " + key + " from IndexDb (localforage). Error: " + err.message);
                resolve(value);
            });
        });
    };
    // localforage:removeItem(key: string, callback?: (err: any) => void): Promise<void>;
    IndexedStorage.prototype.unsetAsync = function (key) {
        return new Promise(function (resolve, reject) {
            if (!key)
                return reject("web-client-store:Indexed:unsetAsync::key cannot be empty/undefined");
            return localforage.removeItem(key, function (err) {
                if (err)
                    return reject("An error occured while deleting the key " + key + " from IndexDb (localforage). Error: " + err.message);
                resolve();
            });
        });
    };
    // localforage:clear(callback?: (err: any) => void): Promise<void>;
    IndexedStorage.prototype.clearAsync = function () {
        return new Promise(function (resolve, reject) {
            return localforage.clear(function (err) {
                if (err)
                    return reject("An error occured while clearing all the keys from IndexDb (localforage). Error: " + err.message);
                resolve();
            });
        });
    };
    // localforage:length(callback?: (err: any, numberOfKeys: number) => void): Promise<number>;
    IndexedStorage.prototype.lengthAsync = function () {
        return new Promise(function (resolve, reject) {
            return localforage.length(function (err, numberOfKeys) {
                if (err)
                    return reject("An error occured while measuring the length of all the keys in IndexDb (localforage). Error: " + err.message);
                resolve(numberOfKeys);
            });
        });
    };
    // localforage:key(keyIndex: number, callback?: (err: any, key: string) => void): Promise<string>;
    IndexedStorage.prototype.getKeyAtAsync = function (keyIndex) {
        return new Promise(function (resolve, reject) {
            return localforage.key(keyIndex, function (err, key) {
                if (err)
                    return reject("An error occured while retrieving the key name at index " + keyIndex + " from IndexDb (localforage). Error: " + err.message);
                resolve(key);
            });
        });
    };
    // localforage:keys(callback?: (err: any, keys: string[]) => void): Promise<string[]>;
    IndexedStorage.prototype.getAllKeysAsync = function () {
        return new Promise(function (resolve, reject) {
            return localforage.keys(function (err, keys) {
                if (err)
                    return reject("An error occured while retrieving the all the key names from IndexDb (localforage). Error: " + err.message);
                resolve(keys);
            });
        });
    };
    // localforage:iterate<T, U>(iteratee: (value: T, key: string, iterationNumber: number) => U,
    //         callback?: (err: any, result: U) => void): Promise<U>;
    IndexedStorage.prototype.forEachAsync = function (iteratee) {
        return new Promise(function (resolve, reject) {
            return localforage.iterate(iteratee, function (err, result) {
                if (err)
                    return reject("An error occured while iterating over all the keys from IndexDb (localforage). Error: " + err.message);
                resolve(result);
            });
        });
    };
    return IndexedStorage;
}());
export default IndexedStorage;
//# sourceMappingURL=IndexedStorage.js.map