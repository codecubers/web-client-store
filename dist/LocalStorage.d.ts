import IStorage from "./IStorage";
export default class LocalStorage implements IStorage {
    constructor();
    ß: any;
    checkEnbled(): boolean;
    set(key: string, value: string): void;
    get(key: string): string;
    unset(key: string): void;
    clear(): void;
}
