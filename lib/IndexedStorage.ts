import { IStorageAsync } from "./IStorageAsync";
import * as localforage from "localforage";


export class IndexedStorage implements IStorageAsync {
    constructor() { }

    checkEnbled(): boolean {
        //Need to find a way to check if indexdb is supported or not
        return true;
    }

    setAsync(key: string, value: string): Promise<any> {
        return new Promise((resolve, reject) => {
            return localforage.setItem(key, value, (err, value)=>{
                if (err) return reject(`An error occured while storing the key ${key} to IndexDb. Error: ${err.message}`);
                resolve(value);
            });
        });
    }

    getAsync(key: string): Promise<any> {
        return new Promise((resolve, reject) => {
            return localforage.getItem(key, (err, value)=>{
                if (err) return reject(`An error occured while retrieving the key ${key} from IndexDb. Error: ${err.message}`);
                resolve(value);
            });
        });
    }

    unsetAsync(key: string): Promise<any> {
        return new Promise((resolve, reject) => {
            return localforage.removeItem(key, (err)=>{
                if (err) return reject(`An error occured while deleting the key ${key} from IndexDb. Error: ${err.message}`);
                resolve(true);
            });
        });
    }
}   