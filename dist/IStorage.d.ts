export default interface IStorage {
    checkEnbled(): boolean;
    set(key: string, value: string): void;
    get(key: string): string;
    unset(key: string): void;
}
