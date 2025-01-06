import IStorage from "./IStorage";
import IStorageAsync from "./IStorageAsync";
import ICacheStorage from "./ICacheStorage";
import { StoreOptions } from "./StoreOptions";
export default class DefaultClientStore {
    static getIndexStore(): IStorageAsync;
    static getCacheStore(): ICacheStorage;
    static getSelectedStore(selection: StoreOptions[]): IStorage;
}
