
import Cookies from "js-cookie";
import { IStorage } from "./IStorage";


export class CookieStorage implements IStorage {
    constructor() { }

    checkEnbled(): boolean {
        return navigator.cookieEnabled;
    }

    set(key: string, value: string, options?: Cookies.CookieAttributes): void {
        Cookies.set(key, value, options);
    }

    get(key: string): string {
        return Cookies.get(key) || '';
    }

    unset(key: string, options?: Cookies.CookieAttributes): void {
        Cookies.remove(key, options)
    }

    getAll(): { [key: string]: string } {
        return Cookies.get();
    }

}