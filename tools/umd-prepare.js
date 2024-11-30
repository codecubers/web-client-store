/**
 * Refer
 * https://stackoverflow.com/a/68629149/1751166
 */
const fs = require('fs');
const path = require('path');
const beautify = require('js-beautify').js;
const pkgName = 'web-client-store';
const pkg = 'WebClientStore';
let files = [{
    name: 'StoreHandler', export: false
}, {
    name: 'CookieStorage', export: false
}, {
    name: 'LocalStorage', export: false
}, {
    name: 'SessionStorage', export: false
}, {
    name: 'IndexedStorage', export: false
}, {
    name: 'DefaultClientStore', export: false
}, {
    name: 'WebClientStore', export: true
}
];
let extnDeps = [
    {
        require: 'js-cookie',
        amd: 'js-cookie',
        global: 'jsCookie',
        variable: 'Cookies'
    },
    {
        require: 'localforage',
        amd: 'localforage',
        global: 'localForage',
        variable: 'localforage'
    }
]
let _out = path.join(__dirname, '..', pkgName, pkgName + '.umd.js');

// console.log('about to preapre umd file at path: ', _out);
// process.exit(0);
const cleanImports = (body) => {
    let lines = body.split('\n');
    return lines.reduce((arr, line)=>{
        if (line && line.trim() && line.trim().startsWith('import ')) {
            //skip
        } else if (line && line.trim() && line.trim().startsWith('export {')) {
            //skip
        } else {
            if (line.startsWith('export ')) {
                line = line.substr(7);
            }
            arr.push(line);
        }
            
        return arr;
    },[]).join('\n');
}

let depsInCommonJs = extnDeps.reduce((s, dep)=>{
    if (dep.require) s += `, require('${dep.require}')`;
    return s;
},'');

let depsInAMD = extnDeps.reduce((s, dep)=>{
    if (dep.amd) s += `, '${dep.amd}'`;
    return s;
},'');

let depsInGlobal = extnDeps.reduce((s, dep)=>{
    if (dep.global) s += `, global.${dep.global}`;
    return s;
},'');

let depsVaiables = extnDeps.reduce((s, dep)=>{
    if (dep.variable) s += `, ${dep.variable}`;
    return s;
},'');


fs.writeFileSync(_out, `
;(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports${depsInCommonJs}) :
        typeof define === 'function' && define.amd ? define(['exports'${depsInAMD}], factory) :
            (factory((global.${pkg} = {})${depsInGlobal}));
}(this, (function (exports${depsVaiables}) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
`);

files.forEach(file=>{
    let _src = path.join(__dirname, '..', pkgName, file.name + '.js');
    let _body = cleanImports(fs.readFileSync(_src).toString());
    let _final = beautify(_body, { indent_size: 2, 
        space_in_empty_paren: true, 
        indent_level: 2,
        preserve_newlines: true,
        max_preserve_newlines: 4 
    }
)
    fs.appendFileSync(_out, `
    
${_final}
    `);
})

files.forEach(file=>{
    if (!file.export) return;
    fs.appendFileSync(_out, `
    exports.${file.name} = ${file.name};`);
    
})

fs.appendFileSync(_out, `

})));
`);

console.log('umd file prepared at path:', _out);




// function init () {
//   function api() {}
//   api.Cookie = DefaultClientStore.getSelectedStore([0]);
//   api.Local = DefaultClientStore.getSelectedStore([1]);
//   api.Session = DefaultClientStore.getSelectedStore([2]);
//   api.Indexed = DefaultClientStore.getIndexStore();
//   return api;
// }
// return init();