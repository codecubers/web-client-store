
import IStorage from "./IStorage";
import StoreHandler from "./StoreHandler";
import CookieStorage from "./CookieStorage";
import SessionStorage from "./SessionStorage";
import LocalStorage from "./LocalStorage";
import IStorageAsync from "./IStorageAsync";
import IndexedStorage from "./IndexedStorage";
import ICacheStorage from "./ICacheStorage";
import CacheStorage from "./CacheStorage";
import {StoreOptions} from "./StoreOptions";

export default class DefaultClientStore {
    public static getDefaultStore(): IStorage {
        var handler1, handler2, handler3: StoreHandler;
        var cs: CookieStorage = new CookieStorage();
        var ss: SessionStorage = new SessionStorage();
        var ls: LocalStorage = new LocalStorage();
        handler1 = new StoreHandler(cs);
        handler2 = new StoreHandler(ss);
        handler3 = new StoreHandler(ls);
        // handler1.setHandler(handler2);
        // handler2.setHandler(handler3);
        return handler1.getStore();
    }

    public static getIndexStore(): IStorageAsync {
        var is: IndexedStorage = new IndexedStorage();
        return is;
    }

    public static getCacheStore(): ICacheStorage {
        var cs: CacheStorage = new CacheStorage();
        return cs;
    }

    public static getSelectedStore(selection: StoreOptions[]): IStorage {
        var handlers = new Array<StoreHandler>(0);
        // var lastHandler: StoreHandler;
        selection.forEach(s => {
            var h: IStorage;
            switch (s) {
                case StoreOptions.Local:
                    h = new LocalStorage();
                    break;
                case StoreOptions.Session:
                    h = new SessionStorage();
                    break;
                case StoreOptions.Cookie:
                    h = new CookieStorage();
                    break;
                default:
                    h = new CookieStorage();
                    break;
            }
            var hndlr = new StoreHandler(h);
            handlers.push(hndlr);
        });

        // handlers.forEach(h => {
        //     if (lastHandler != null) {
        //         lastHandler.setHandler(h);
        //     }
        //     lastHandler = h;
        // });

        return handlers[0].getStore();
    }

}