import Cookies from "js-cookie";
import IStorage from "./IStorage";
export default class CookieStorage implements IStorage {
    constructor();
    checkEnbled(): boolean;
    set(key: string, value: string, options?: Cookies.CookieAttributes): void;
    get(key: string): string;
    unset(key: string, options?: Cookies.CookieAttributes): void;
    getAll(): {
        [key: string]: string;
    };
}
