import Cookies from 'js-cookie';
import localforage from 'localforage';

const Store = {

    /**
     * Cookie
     * Key-value storage that stores values as string
     * Have expiration time, if no expiration time is given then the cookie will get expired at the end of the browser session.
     * Up to 4KB data can be stored
     * Send to server for every request and follow same-origin policy
     * 
     * Use case:
     * Server can get data from cookie to track session status.
     */
    setCookie: function(key, val) {
        Cookies.set(key, val);
    },
    getCookie: function(key) {
        return Cookies.get(key);
    },
    removeCookie: function(key) {
        Cookies.remove(key);
    },


    /**
     * Session Storage
     * Key-value storage that stores values as strings
     * Data stored does not survive after the table/window is closed
     * Up to 10MB data can be stored
     * Follow the same-origin policy and is bound to a tab
     * Do not send to server, for clien-side usage only
     * 
     * Use case:
     * Store user-related data for one session only like language selection
     */
    setSessionItem: function(key, val) {
        sessionStorage.setItem(key, val);
    },
    getSessionItem: function(key) {
        return sessionStorage.getItem(key);
    },
    removeSessionItem: function(key) {
        sessionStorage.removeItem(key);
    },


    /**
     * Local Storage
     * Key-value storage that stores values as strings
     * Does not have expiration date (persistent storage) unless explicitly clear the browser using settings or Javascript
     * Up to 10MB data can be stored
     * Follow the same-origin policy, which means the Protocol(Http/Https), port and the host are the same. Only scripts of the same origin can access LocalStorge data
     * Do not send to server, for client-side usage only
     * 
     * Use case:
     * Can be use to store user-related data
     */
    setLocalItem: function(key, val) {
        localStorage.setItem(key, val);
    },
    getLocalItem: function(key) {
        return localStorage.getItem(key);
    },
    removeLocalItem: function(key) {
        localStorage.removeItem(key);
    },


    /**
     * IndexedDB
     * Can store both objects and key-value pairs
     * Up to 250MB for IE
     * IndexedDB API is asynchronous, unlike loca storage and session storage. IndexedDB operations are event-driven by various events like onsuccess, onerror, oncomplete etc.
     * Follow the same-origin policy
     * Do not have expiration time (persistent storage) unless explicit deletion
     * 
     * Use case:
     * When need to store a large number of objects which is time-consuming and a lag on performance to convert to string for Local Storage every time.
     */
    setIndexedItemPromise: function (key, val) {
        return new Promise((resolve, reject) => {
            return localforage.setItem(key, val, (err, value)=>{
                if (err) return reject(`An error occured while storing the key ${key} to IndexDb. Error: ${err.message}`);
                resolve(value);
            });
        });
    },
    getIndexedItemPromise: function (key) {
        return new Promise((resolve, reject) => {
            return localforage.getItem(key, (err, value)=>{
                if (err) return reject(`An error occured while retrieving the key ${key} from IndexDb. Error: ${err.message}`);
                resolve(value);
            });
        });
    },
    removeIndexedItemPromise: function(key) {
        return new Promise((resolve, reject) => {
            return localforage.removeItem(key, (err)=>{
                if (err) return reject(`An error occured while deleting the key ${key} from IndexDb. Error: ${err.message}`);
                resolve(true);
            });
        });
    },
};


export default Store;