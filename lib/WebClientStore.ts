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
export const WebClientStore: IWebClientStore = {
  Cookie: new CookieStorage(),
  Local: new LocalStorage(),
  Session: new SessionStorage(),
  Indexed: new IndexedStorage(),
  Cache: new CacheStorage(),
};
