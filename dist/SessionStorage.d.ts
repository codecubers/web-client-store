import IStorage from "./IStorage";
export default class SessionStorage implements IStorage {
    constructor();
    checkEnbled(): boolean;
    set(key: string, value: string): void;
    get(key: string): string;
    unset(key: string): void;
    clear(): void;
}
