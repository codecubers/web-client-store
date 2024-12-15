# web-client-store
NPM Package to assist in handling Cookies, Session, Local, IndexDB (localforage).


## Usage

### simplie example in a React web app
```js
import WebClientStore from 'web-client-store';
let {Cookie, Session, Local, Indexed} = WebClientStore;

let defaultMode = 1;
let key = "ACCOUNT_GRID_MODE";

/**
 * Example applicable for Local, Session, Cookie
 * Synchronous execution
 * */
getDefaultMode = ()=>{
    if (Local.get(key)) {
        return Number(Local.get(key))
    } else {
        Local.set(key, defaultMode);
    }
    return defaultMode;
}

handleSetMode = (gridMode=defaultMode) => {
    Local.set(key, gridMode);
}

handleClearMode = () => {
    Local.unset(keyGridMode);
}
```

```js
/**
 * Example applicable for Indexed only
 * Asynchronous execution
 * */
handleSetModeAsync = (gridMode=defaultMode) => {
    // Indexed.getAsync(key).then((value)=>{ // use retrieved value })
    // Indexed.unsetAsync(key).then(()=>{})
    let defaultMode = 1;
    let key = "TEST_INDEXDB_ACCOUNT_GRID_MODE";
    Indexed.setAsync(key, defaultMode)
    .then((val1) => {
        // index db save successful
        console.log(`(key: ${key}, value: ${val1}) saved successfully.`);
        return Indexed.getAsync(key).then((val2)=>{
            console.log(`(key: ${key}, value: ${val2}) retrieved successfully.`);
            return Indexed.lengthAsync().then((count)=>{
                console.log(`Total keys: [${count}]`);
                return Indexed.getKeyAtAsync(0).then((keyVal)=>{
                    console.log(`key at index [0] is [${keyVal}]`);
                    return Indexed.getAllKeysAsync(0).then((keys)=>{
                        console.log(`And all the keys are ${JSON.stringify(keys, null, 2)}`);
                        return Indexed.forEachAsync((v, k, i)=>{
                            console.log(`(index: ${i} key: ${k}, value: ${v})`);
                        })
                    })
                })
            })
        })
    })
    .catch((err) => {
        // error while performing operations
        console.error(err);
    })
}
```

Console Output:
```sh
(key: TEST_INDEXDB_ACCOUNT_GRID_MODE, value: 1) saved successfully.
(key: TEST_INDEXDB_ACCOUNT_GRID_MODE, value: 1) retrieved successfully.
Total keys: [1]
key at index [0] is [KEY_ACCOUNT_TYPES]
And all the keys are [
  "TEST_INDEXDB_ACCOUNT_GRID_MODE",
]
(index: 1 key: TEST_INDEXDB_ACCOUNT_GRID_MODE, value: 1)
```


### Caching capabilities
(Coming soon...)