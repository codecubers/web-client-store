import IStorage from "./IStorage";
export default class StoreHandler {
    private preferedStore;
    constructor(preferedStore: IStorage);
    getStore(): IStorage;
}
