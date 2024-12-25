// import { IStorage } from "./IStorage";
import CacheStorage from "./CacheStorage";
import CookieStorage from "./CookieStorage";
import IndexedStorage from "./IndexedStorage";
import LocalStorage from "./LocalStorage";
import SessionStorage from "./SessionStorage";
// import { StoreOptions } from "./StoreOptions";
// import { CookieStorage } from "./CookieStorage";
// import { IStorage } from "./IStorage";
// import { IStorageAsync } from "./IStorageAsync";
// import { LocalStorage } from "./LocalStorage";
// import { SessionStorage } from "./SessionStorage";
// import IndexedStorage from "./IndexedStorage";
// import { StoreOptions } from "./StoreOptions";
// let _handlerAsync: IStorageAsync = new IndexedStorage ();
interface IWebClientStore {
    Cookie: CookieStorage;
    Local: LocalStorage;
    Session: SessionStorage;
    Indexed: IndexedStorage;
    Cache: CacheStorage;
}
export const WebClientStore: IWebClientStore = {
        // strategy: IStorage  DefaultClientStore.getDefaultStore();    ;
        // public Cookie: CookieStorage;
        // public Local: LocalStorage;
        // public Session: SessionStorage;

        // constructor() {                                   
        //     this.strategy = DefaultClientStore.getDefaultStore();      
        //     // this.Cookie = new CookieStorage();
        //     // this.Local = new LocalStorage();
        //     // this.Session = new SessionStorage();
        // }
        // Cookie: DefaultClientStore.getSelectedStore([StoreOptions.Cookie]),
        // Local: DefaultClientStore.getSelectedStore([StoreOptions.Local]),
        // Session: DefaultClientStore.getSelectedStore([StoreOptions.Session]),
        // Indexed: DefaultClientStore.getIndexStore(),
        // Cache: DefaultClientStore.getCacheStore()
        Cookie: new CookieStorage(),
        Local: new LocalStorage(),
        Session: new SessionStorage(),
        Indexed: new IndexedStorage(),
        Cache: new CacheStorage()

        // public changeClientStore(pSelection:StoreOptions[]):void{
        //     this.strategy =DefaultClientStore.getSelectedStore(pSelection);
        // }

        // public set(key:string,value:string): void {
        //     this.strategy.set(key,value);
        // }

        // public get(key:string): string {
        //     return this.strategy.get(key);
        // }

        // public unset(key:string): void {
        //     this.strategy.unset(key);
        // }


        // public Cookie(props?: string[]): IStorage {
        //     return new CookieStorage();
        // }


        // WebClientStore.prototype.Cookie = this.Cookie;
        // WebClientStore.prototype.Local = this.Local;
        // WebClientStore.prototype.Session = this.Session;
        

        


    }