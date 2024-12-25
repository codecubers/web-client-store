import IStorage from "./IStorage";

export default class StoreHandler{
    // private handler:StoreHandler ;

    constructor(private preferedStore:IStorage)
    {
       
    }

    // public setHandler(handler:StoreHandler)
    // {
    //     this.handler=handler;
    // }

    public getStore():IStorage
    {
        // if(this.preferedStore.checkEnbled())
        // {
            return this.preferedStore;
        // }else
        // {
        //     return this.handler.getStore();
        // }
    }
}