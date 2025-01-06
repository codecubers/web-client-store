import IStorage from "./IStorage";

export default class StoreHandler {
  constructor(private preferedStore: IStorage) {}

  public getStore(): IStorage {
    return this.preferedStore;
  }
}
