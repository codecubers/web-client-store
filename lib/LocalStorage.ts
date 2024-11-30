import { IStorage } from "./IStorage";


export class LocalStorage implements IStorage {
    constructor() { }

    checkEnbled(): boolean {
        return typeof (Storage) !== "undefined";
    }

    set(key: string, value: string): void {
        localStorage.setItem(key, value);
    }

    get(key: string): string {
        return localStorage.getItem(key) || '';
    }

    unset(key: string): void {
        localStorage.removeItem(key)
    }
}   