import CacheStorage from "./CacheStorage";
import CookieStorage from "./CookieStorage";
import IndexedStorage from "./IndexedStorage";
import LocalStorage from "./LocalStorage";
import SessionStorage from "./SessionStorage";
interface IWebClientStore {
    Cookie: CookieStorage;
    Local: LocalStorage;
    Session: SessionStorage;
    Indexed: IndexedStorage;
    Cache: CacheStorage;
}
export declare const WebClientStore: IWebClientStore;
export {};
