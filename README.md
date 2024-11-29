# web-client-store
NPM Package to assist in handling Cookies, Session, Local, IndexDB (localforage) with Caching capabilities


## Usage

### simplie example in a React web app
```js
import ClientStore from 'web-client-store';

getDefaultMode = ()=>{
    if (ClientStore.getLocalItem(keyGridMode)) {
        return Number(ClientStore.getLocalItem(keyGridMode))
    } else {
        ClientStore.setLocalItem(keyGridMode, defaultMode);
    }
    return defaultMode;
}

handleSetMode = (gridMode=defaultMode) => {
    ClientStore.setLocalItem(keyGridMode, gridMode);
    this.setState({gridMode})
}

handleClearMode = () => {
    ClientStore.removeLocalItem(keyGridMode);
}
```