import IStorageAsync from "./IStorageAsync";
export default interface ICacheStorage extends IStorageAsync {
  isCached: (key: string) => boolean;
  getCacheAge: (key: string) => number;
}
