import CacheStorage from "./CacheStorage";
import CookieStorage from "./CookieStorage";
import IndexedStorage from "./IndexedStorage";
import LocalStorage from "./LocalStorage";
import SessionStorage from "./SessionStorage";
export var WebClientStore = {
    Cookie: new CookieStorage(),
    Local: new LocalStorage(),
    Session: new SessionStorage(),
    Indexed: new IndexedStorage(),
    Cache: new CacheStorage(),
};
//# sourceMappingURL=WebClientStore.js.map