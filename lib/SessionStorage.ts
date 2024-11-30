import { IStorage } from "./IStorage";


export class SessionStorage implements IStorage {
    constructor() { }

    checkEnbled(): boolean {
        return typeof (Storage) !== "undefined";
    }

    set(key: string, value: string): void {
        sessionStorage.set(key, value);
    }

    get(key: string): string {
        return sessionStorage.get(key) || '';
    }

    unset(key: string): void {
        sessionStorage.remove(key)
    }
}   