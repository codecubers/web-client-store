import { IStorage } from "./IStorage";


export class LocalStorage implements IStorage {
    constructor() { }

    checkEnbled(): boolean {
        return typeof (Storage) !== "undefined";
    }

    set(key: string, value: string): void {
        if (key) localStorage.setItem(key, value);
    }

    get(key: string): string {
        return key ? (localStorage.getItem(key) || '') : '';
    }

    unset(key: string): void {
        if (key) localStorage.removeItem(key)
    }

    clear(): void {
        localStorage.clear();
    }
}   