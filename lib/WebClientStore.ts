// import { IStorage } from "./IStorage";
import { DefaultClientStore } from "./DefaultClientStore";
// import { StoreOptions } from "./StoreOptions";
import { CookieStorage } from "./CookieStorage";
import { IStorage } from "./IStorage";
import { IStorageAsync } from "./IStorageAsync";
// import { LocalStorage } from "./LocalStorage";
// import { SessionStorage } from "./SessionStorage";
import { IndexedStorage } from "./IndexedStorage";
let _handlerAsync: IStorageAsync = new IndexedStorage ();
export const WebClientStore = {
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
        Cookie: DefaultClientStore.getSelectedStore([0]),
        Local: DefaultClientStore.getSelectedStore([1]),
        Session: DefaultClientStore.getSelectedStore([2]),
        Indexed: DefaultClientStore.getIndexStore()

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