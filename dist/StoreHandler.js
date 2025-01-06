var StoreHandler = /** @class */ (function () {
    function StoreHandler(preferedStore) {
        this.preferedStore = preferedStore;
    }
    StoreHandler.prototype.getStore = function () {
        return this.preferedStore;
    };
    return StoreHandler;
}());
export default StoreHandler;
//# sourceMappingURL=StoreHandler.js.map