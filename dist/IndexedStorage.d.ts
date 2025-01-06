import IStorageAsync from "./IStorageAsync";
export default class IndexedStorage implements IStorageAsync {
    constructor();
    checkEnbled(): boolean;
    setAsync(key: string, value: string): Promise<any>;
    getAsync(key: string): Promise<any>;
    unsetAsync(key: string): Promise<void>;
    clearAsync(): Promise<void>;
    lengthAsync(): Promise<number>;
    getKeyAtAsync(keyIndex: number): Promise<string>;
    getAllKeysAsync(): Promise<string[]>;
    forEachAsync<T, U>(iteratee: (value: T, key: string, iterationNumber: number) => U): Promise<U>;
}
