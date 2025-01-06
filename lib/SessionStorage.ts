import IStorage from "./IStorage";

export default class SessionStorage implements IStorage {
  constructor() {}

  checkEnbled(): boolean {
    return !(typeof Storage === "undefined");
  }

  set(key: string, value: string): void {
    if (key) sessionStorage.setItem(key, value);
  }

  get(key: string): string {
    return key ? sessionStorage.getItem(key) || "" : "";
  }

  unset(key: string): void {
    if (key) sessionStorage.removeItem(key);
  }

  clear(): void {
    sessionStorage.clear();
  }
}
