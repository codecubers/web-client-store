
;(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('js-cookie'), require('localforage')) :
        typeof define === 'function' && define.amd ? define(['exports', 'js-cookie', 'localforage'], factory) :
            (factory((global.WebClientStore = {}), global.jsCookie, global.localForage));
}(this, (function (exports, Cookies, localforage) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });

    
    var StoreHandler = /** @class */ (function() {
      function StoreHandler(preferedStore) {
        this.preferedStore = preferedStore;
      }
      StoreHandler.prototype.getStore = function() {
        return this.preferedStore;
      };
      return StoreHandler;
    }());
    //# sourceMappingURL=StoreHandler.js.map
    
    
    var CookieStorage = /** @class */ (function() {
      function CookieStorage() {}
      CookieStorage.prototype.checkEnbled = function() {
        return navigator.cookieEnabled;
      };
      CookieStorage.prototype.set = function(key, value, options) {
        if (key)
          Cookies.set(key, value, options);
      };
      CookieStorage.prototype.get = function(key) {
        return key ? Cookies.get(key) || "" : "";
      };
      CookieStorage.prototype.unset = function(key, options) {
        if (key)
          Cookies.remove(key, options);
      };
      CookieStorage.prototype.getAll = function() {
        return Cookies.get();
      };
      return CookieStorage;
    }());
    //# sourceMappingURL=CookieStorage.js.map
    
    
    var LocalStorage = /** @class */ (function() {
      function LocalStorage() {}
      LocalStorage.prototype.checkEnbled = function() {
        return !(typeof Storage === "undefined");
      };
      LocalStorage.prototype.set = function(key, value) {
        if (key)
          localStorage.setItem(key, value);
      };
      LocalStorage.prototype.get = function(key) {
        return key ? localStorage.getItem(key) || "" : "";
      };
      LocalStorage.prototype.unset = function(key) {
        if (key)
          localStorage.removeItem(key);
      };
      LocalStorage.prototype.clear = function() {
        localStorage.clear();
      };
      return LocalStorage;
    }());
    //# sourceMappingURL=LocalStorage.js.map
    
    
    var SessionStorage = /** @class */ (function() {
      function SessionStorage() {}
      SessionStorage.prototype.checkEnbled = function() {
        return !(typeof Storage === "undefined");
      };
      SessionStorage.prototype.set = function(key, value) {
        if (key)
          sessionStorage.setItem(key, value);
      };
      SessionStorage.prototype.get = function(key) {
        return key ? sessionStorage.getItem(key) || "" : "";
      };
      SessionStorage.prototype.unset = function(key) {
        if (key)
          sessionStorage.removeItem(key);
      };
      SessionStorage.prototype.clear = function() {
        sessionStorage.clear();
      };
      return SessionStorage;
    }());
    //# sourceMappingURL=SessionStorage.js.map
    
    
    var IndexedStorage = /** @class */ (function() {
      function IndexedStorage() {}
      IndexedStorage.prototype.checkEnbled = function() {
        return localforage.config() ? true : false;
      };
      // localforage:setItem<T>(key: string, value: T, callback?: (err: any, value: T) => void): Promise<T>;
      IndexedStorage.prototype.setAsync = function(key, value) {
        return new Promise(function(resolve, reject) {
          if (!key)
            return reject("web-client-store:Indexed:setAsync::key cannot be empty/undefined");
          return localforage.setItem(key, value, function(err, value) {
            if (err)
              return reject("An error occured while storing the key " + key + " to IndexDb (localforage). Error: " + err.message);
            resolve(value);
          });
        });
      };
      // localforage:getItem<T>(key: string, callback?: (err: any, value: T | null) => void): Promise<T | null>;
      IndexedStorage.prototype.getAsync = function(key) {
        return new Promise(function(resolve, reject) {
          if (!key)
            return reject("web-client-store:Indexed:getAsync::key cannot be empty/undefined");
          return localforage.getItem(key, function(err, value) {
            if (err)
              return reject("An error occured while retrieving the key " + key + " from IndexDb (localforage). Error: " + err.message);
            resolve(value);
          });
        });
      };
      // localforage:removeItem(key: string, callback?: (err: any) => void): Promise<void>;
      IndexedStorage.prototype.unsetAsync = function(key) {
        return new Promise(function(resolve, reject) {
          if (!key)
            return reject("web-client-store:Indexed:unsetAsync::key cannot be empty/undefined");
          return localforage.removeItem(key, function(err) {
            if (err)
              return reject("An error occured while deleting the key " + key + " from IndexDb (localforage). Error: " + err.message);
            resolve();
          });
        });
      };
      // localforage:clear(callback?: (err: any) => void): Promise<void>;
      IndexedStorage.prototype.clearAsync = function() {
        return new Promise(function(resolve, reject) {
          return localforage.clear(function(err) {
            if (err)
              return reject("An error occured while clearing all the keys from IndexDb (localforage). Error: " + err.message);
            resolve();
          });
        });
      };
      // localforage:length(callback?: (err: any, numberOfKeys: number) => void): Promise<number>;
      IndexedStorage.prototype.lengthAsync = function() {
        return new Promise(function(resolve, reject) {
          return localforage.length(function(err, numberOfKeys) {
            if (err)
              return reject("An error occured while measuring the length of all the keys in IndexDb (localforage). Error: " + err.message);
            resolve(numberOfKeys);
          });
        });
      };
      // localforage:key(keyIndex: number, callback?: (err: any, key: string) => void): Promise<string>;
      IndexedStorage.prototype.getKeyAtAsync = function(keyIndex) {
        return new Promise(function(resolve, reject) {
          return localforage.key(keyIndex, function(err, key) {
            if (err)
              return reject("An error occured while retrieving the key name at index " + keyIndex + " from IndexDb (localforage). Error: " + err.message);
            resolve(key);
          });
        });
      };
      // localforage:keys(callback?: (err: any, keys: string[]) => void): Promise<string[]>;
      IndexedStorage.prototype.getAllKeysAsync = function() {
        return new Promise(function(resolve, reject) {
          return localforage.keys(function(err, keys) {
            if (err)
              return reject("An error occured while retrieving the all the key names from IndexDb (localforage). Error: " + err.message);
            resolve(keys);
          });
        });
      };
      // localforage:iterate<T, U>(iteratee: (value: T, key: string, iterationNumber: number) => U,
      //         callback?: (err: any, result: U) => void): Promise<U>;
      IndexedStorage.prototype.forEachAsync = function(iteratee) {
        return new Promise(function(resolve, reject) {
          return localforage.iterate(iteratee, function(err, result) {
            if (err)
              return reject("An error occured while iterating over all the keys from IndexDb (localforage). Error: " + err.message);
            resolve(result);
          });
        });
      };
      return IndexedStorage;
    }());
    //# sourceMappingURL=IndexedStorage.js.map
    
    
    var CacheStorage = /** @class */ (function() {
      function CacheStorage() {
        var _this = this;
        this._index = DefaultClientStore.getIndexStore();
        this._local = DefaultClientStore.getSelectedStore([1 /* Local */ ]);
        this._isCached = function(key) {
          var check = _this._local.get(key);
          return check ? true : false;
        };
      }
      CacheStorage.prototype.checkEnbled = function() {
        return this._index.checkEnbled();
      };
      CacheStorage.prototype.setAsync = function(key, value) {
        var _this = this;
        return new Promise(function(resolve, reject) {
          return _this._index
            .setAsync(key, value)
            .then(function(value) {
              _this._local.set(key, new Date().getTime().toString());
              resolve(value);
            })
            .catch(function(err) {
              return reject(err);
            });
        });
      };
      CacheStorage.prototype.getAsync = function(key) {
        var _this = this;
        return new Promise(function(resolve, reject) {
          if (!_this._isCached(key)) {
            reject("key " + key + " not cached yet. Fetch and cache.");
          } else {
            return _this._index
              .getAsync(key)
              .then(function(value) {
                if (value) {
                  resolve(value);
                } else {
                  reject("empty cache value found for the key " + key);
                }
              })
              .catch(function(err) {
                return reject(err);
              });
          }
        });
      };
      CacheStorage.prototype.unsetAsync = function(key) {
        var _this = this;
        return new Promise(function(resolve, reject) {
          return _this._index
            .unsetAsync(key)
            .then(function() {
              _this._local.unset(key);
              resolve();
            })
            .catch(function(err) {
              return reject(err);
            });
        });
      };
      CacheStorage.prototype.isCached = function(key) {
        return this._isCached(key);
      };
      CacheStorage.prototype.getCacheAge = function(key) {
        if (!this._isCached(key))
          return -2;
        var _ageSec = -1;
        try {
          var _val = Number(this._local.get(key));
          _ageSec = Math.floor((new Date().getTime() - _val) / 1000);
        } catch (error) {
          console.warn("Error while determining cached age of the key " + key + " from value " + this._local.get(key));
          console.error(error);
        }
        return _ageSec;
      };
      return CacheStorage;
    }());
    //# sourceMappingURL=CacheStorage.js.map
    
    
    var DefaultClientStore = /** @class */ (function() {
      function DefaultClientStore() {}
      DefaultClientStore.getIndexStore = function() {
        var is = new IndexedStorage();
        return is;
      };
      DefaultClientStore.getCacheStore = function() {
        var cs = new CacheStorage();
        return cs;
      };
      DefaultClientStore.getSelectedStore = function(selection) {
        var handlers = new Array(0);
        selection.forEach(function(s) {
          var h;
          switch (s) {
            case 1 /* Local */ :
              h = new LocalStorage();
              break;
            case 2 /* Session */ :
              h = new SessionStorage();
              break;
            case 0 /* Cookie */ :
              h = new CookieStorage();
              break;
            default:
              h = new CookieStorage();
              break;
          }
          var hndlr = new StoreHandler(h);
          handlers.push(hndlr);
        });
        return handlers[0].getStore();
      };
      return DefaultClientStore;
    }());
    //# sourceMappingURL=DefaultClientStore.js.map
    
    
    var WebClientStore = {
      Cookie: new CookieStorage(),
      Local: new LocalStorage(),
      Session: new SessionStorage(),
      Indexed: new IndexedStorage(),
      Cache: new CacheStorage(),
    };
    //# sourceMappingURL=WebClientStore.js.map
    
    exports.WebClientStore = WebClientStore;

})));
