import StoreHandler from "./StoreHandler";
import CookieStorage from "./CookieStorage";
import SessionStorage from "./SessionStorage";
import LocalStorage from "./LocalStorage";
import IndexedStorage from "./IndexedStorage";
import CacheStorage from "./CacheStorage";
var DefaultClientStore = /** @class */ (function () {
    function DefaultClientStore() {
    }
    DefaultClientStore.getIndexStore = function () {
        var is = new IndexedStorage();
        return is;
    };
    DefaultClientStore.getCacheStore = function () {
        var cs = new CacheStorage();
        return cs;
    };
    DefaultClientStore.getSelectedStore = function (selection) {
        var handlers = new Array(0);
        selection.forEach(function (s) {
            var h;
            switch (s) {
                case 1 /* Local */:
                    h = new LocalStorage();
                    break;
                case 2 /* Session */:
                    h = new SessionStorage();
                    break;
                case 0 /* Cookie */:
                    h = new CookieStorage();
                    break;
                default:
                    h = new CookieStorage();
                    break;
            }
            var hndlr = new StoreHandler(h);
            handlers.push(hndlr);
        });
        return handlers[0].getStore();
    };
    return DefaultClientStore;
}());
export default DefaultClientStore;
//# sourceMappingURL=DefaultClientStore.js.map