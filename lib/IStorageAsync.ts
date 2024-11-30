import { IStorage } from "./IStorage";

export interface IStorageAsync
{
    checkEnbled():boolean;
    setAsync(key:string,value:string):Promise<any>;
    getAsync(key:string):Promise<any>;
    unsetAsync(key:string):Promise<any>;
}
