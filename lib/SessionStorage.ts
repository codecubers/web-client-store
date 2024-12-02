import { IStorage } from "./IStorage";


export class SessionStorage implements IStorage {
    constructor() { }

    checkEnbled(): boolean {
        return typeof (Storage) !== "undefined";
    }

    set(key: string, value: string): void {
        sessionStorage.setItem(key, value);
    }

    get(key: string): string {
        return sessionStorage.getItem(key) || '';
    }

    unset(key: string): void {
        sessionStorage.removeItem(key)
    }

    clear(): void {
        sessionStorage.clear();
    }
 }   