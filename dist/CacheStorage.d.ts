import ICacheStorage from "./ICacheStorage";
export default class CacheStorage implements ICacheStorage {
    private _isCached;
    private _index;
    private _local;
    constructor();
    checkEnbled(): boolean;
    setAsync(key: string, value: string): Promise<any>;
    getAsync(key: string): Promise<any>;
    unsetAsync(key: string): Promise<void>;
    isCached(key: string): boolean;
    getCacheAge(key: string): number;
}
