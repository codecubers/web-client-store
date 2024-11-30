# web-client-store
NPM Package to assist in handling Cookies, Session, Local, IndexDB (localforage) with Caching capabilities


## Usage

### simplie example in a React web app
```js
import WebClientStore from 'web-client-store';

let key = Constants.LOCAL_KEYS.ACTIVE_ACCOUNT_GRID_MODE;
getDefaultMode = ()=>{
    if (WebClientStore.Local.get(key)) {
        return Number(WebClientStore.Local.get(key))
    } else {
        WebClientStore.Local.set(key, defaultMode);
    }
    return defaultMode;
}

handleSetMode = (gridMode=defaultMode) => {
    WebClientStore.Local.set(key, gridMode);
    // localStorage.setItem(Constants.SESSION_KEYS.ACTIVE_ACCOUNT_GRID_MODE, gridMode);
    this.setState({gridMode, enabledUpdate: false})
}

handleClearMode = () => {
    WebClientStore.Local.unset(keyGridMode);
}
```