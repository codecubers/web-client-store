interface StoreAttributes {

    /**
     * Prefix string to prepend to the given value
     */
    prefix?: string | undefined;

    /**
     * Suffix string to append to the given value
     */
    suffix?: string | undefined;
}

interface StoreStatic {

    /**
     * Set Cookie
     */
    setCookie(key: string, val: string, options?: StoreAttributes): string | undefined;

    /**
     * Read Cookie
     */
    getCookie(key: string, options?: StoreAttributes): string | undefined;

    /**
     * Delete Cookie 
     */
    removeCookie(key: string): void;

    /**
     * Set Local Storage Item
     */
    setLocalItem(key: string, val: string, options?: StoreAttributes): string | undefined;

    /**
     * Read Local Storage Item
     */
    getLocalItem(key: string, options?: StoreAttributes): string | undefined;

    /**
     * Delete Local Storage Item
     */
    removeLocalItem(key: string): void;
}

declare const Store: StoreStatic;

export = Store;
