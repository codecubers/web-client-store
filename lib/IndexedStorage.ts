import IStorageAsync from "./IStorageAsync";
import * as localforage from "localforage";


export default class IndexedStorage implements IStorageAsync {
    constructor() { }

    checkEnbled(): boolean {
        return (localforage.config()) ? true : false;
    }

    // setItem<T>(key: string, value: T, callback?: (err: any, value: T) => void): Promise<T>;
    setAsync(key: string, value: string): Promise<any> {
        return new Promise((resolve, reject) => {
            if (!key) return reject('web-client-store:Indexed:setAsync::key cannot be empty/undefined')
                
            return localforage.setItem(key, value, (err, value)=>{
                if (err) return reject(`An error occured while storing the key ${key} to IndexDb (localforage). Error: ${err.message}`);
                resolve(value);
            });
        });
    }


    // getItem<T>(key: string, callback?: (err: any, value: T | null) => void): Promise<T | null>;
    getAsync(key: string): Promise<any> {
        return new Promise((resolve, reject) => {
            if (!key) return reject('web-client-store:Indexed:getAsync::key cannot be empty/undefined')
            return localforage.getItem(key, (err, value)=>{
                if (err) return reject(`An error occured while retrieving the key ${key} from IndexDb (localforage). Error: ${err.message}`);
                resolve(value);
            });
        });
    }

    // removeItem(key: string, callback?: (err: any) => void): Promise<void>;
    unsetAsync(key: string): Promise<void> {
        return new Promise((resolve, reject) => {
            if (!key) return reject('web-client-store:Indexed:unsetAsync::key cannot be empty/undefined')
            return localforage.removeItem(key, (err)=>{
                if (err) return reject(`An error occured while deleting the key ${key} from IndexDb (localforage). Error: ${err.message}`);
                resolve();
            });
        });
    }

    // clear(callback?: (err: any) => void): Promise<void>;
    clearAsync(): Promise<void> {
        return new Promise((resolve, reject) => {
            return localforage.clear((err)=>{
                if (err) return reject(`An error occured while clearing all the keys from IndexDb (localforage). Error: ${err.message}`);
                resolve();
            });
        });
    }

    // length(callback?: (err: any, numberOfKeys: number) => void): Promise<number>;
    lengthAsync(): Promise<number> {
        return new Promise((resolve, reject) => {
            return localforage.length((err, numberOfKeys)=>{
                if (err) return reject(`An error occured while measuring the length of all the keys in IndexDb (localforage). Error: ${err.message}`);
                resolve(numberOfKeys);
            });
        });
    }

    // key(keyIndex: number, callback?: (err: any, key: string) => void): Promise<string>;
    getKeyAtAsync(keyIndex: number): Promise<string> {
        return new Promise((resolve, reject) => {
            return localforage.key(keyIndex, (err, key)=>{
                if (err) return reject(`An error occured while retrieving the key name at index ${keyIndex} from IndexDb (localforage). Error: ${err.message}`);
                resolve(key);
            });
        });
    }

    // keys(callback?: (err: any, keys: string[]) => void): Promise<string[]>;
    getAllKeysAsync(): Promise<string[]> {
        return new Promise((resolve, reject) => {
            return localforage.keys((err, keys)=>{
                if (err) return reject(`An error occured while retrieving the all the key names from IndexDb (localforage). Error: ${err.message}`);
                resolve(keys);
            });
        });
    }

    // iterate<T, U>(iteratee: (value: T, key: string, iterationNumber: number) => U,
    //         callback?: (err: any, result: U) => void): Promise<U>;
    forEachAsync<T, U>(iteratee: (value: T, key: string, iterationNumber: number) => U): Promise<U> {
        return new Promise((resolve, reject) => {
            return localforage.iterate(iteratee,(err, result)=>{
                if (err) return reject(`An error occured while iterating over all the keys from IndexDb (localforage). Error: ${err.message}`);
                resolve(result);
            });
        });
    }
}   