import ICacheStorage from "./ICacheStorage";
import DefaultClientStore from "./DefaultClientStore";
import IStorageAsync from "./IStorageAsync";
import IStorage from "./IStorage";
// import IndexedStorage from "./IndexedStorage";
// import LocalStorage from "./LocalStorage";
import { StoreOptions } from "./StoreOptions";

export default class CacheStorage implements ICacheStorage {
  private _isCached: (key: string) => boolean;
  private _index: IStorageAsync;
  private _local: IStorage;
  constructor() {
    this._index = DefaultClientStore.getIndexStore();
    this._local = DefaultClientStore.getSelectedStore([StoreOptions.Local]);
    this._isCached = (key) => {
        let check = this._local.get(key);
        return check ? true : false;
    };
  }
  

  checkEnbled(): boolean {
    return true;
  }

  setAsync(key: string, value: string): Promise<any> {
    return new Promise((resolve, reject) => {
      return this._index
        .setAsync(key, value)
        .then((value) => {
          this._local.set(key, new Date().getTime().toString());
          resolve(value);
        })
        .catch((err) => reject(err));
    });
  }

  getAsync(key: string): Promise<any> {
    return new Promise((resolve, reject) => {
      if (!this._isCached(key)) {
        reject(`key ${key} not cached yet. Fetch and cache.`);
      } else {
        return this._index
          .getAsync(key)
          .then((value) => {
            if (value) {
              resolve(value);
            } else {
              reject(`empty cache value found for the key ${key}`);
            }
          })
          .catch((err) => reject(err));
      }
    });
  }

  unsetAsync(key: string): Promise<void> {
    return new Promise((resolve, reject) => {
      return this._index
        .unsetAsync(key)
        .then(() => {
          this._local.unset(key);
          resolve();
        })
        .catch((err) => reject(err));
    });
  }

  isCached(key: string): boolean {
    return this._isCached(key);
  }

  getCacheAge(key: string): number {
    if (!this._isCached(key)) return -2;
    let _ageSec = -1;
    try {
      let _val = Number(this._local.get(key));
      _ageSec = Math.floor((new Date().getTime() - _val) / 1000);
    } catch (error) {
      console.warn(
        `Error while determining cached age of the key ${key} from value ${this._local.get(
          key
        )}`
      );
      console.error(error);
    }
    return _ageSec;
  }
}
