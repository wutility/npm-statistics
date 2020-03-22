# 💨 Npm statistics  
Find your npm packages download statistics.

![](https://badgen.net/npm/v/npm-statistics) ![](https://badgen.net/bundlephobia/min/npm-statistics)

## Installation
```js
$ npm i npm-statistics
// or
$ yarn add npm-statistics
```
## Usage
```js
const { getAll, getOne } = require('npm-statistics');
// or
import { getAll, getOne } from 'npm-statistics';
```

Or include it via jsDelivr CDN:
```html
<script src="https://cdn.jsdelivr.net/npm/npm-statistics@1.0.0/build/index.umd.js"></script>
// access via object : NpmStats 
NpmStats.getAll(options)
```

## Methods and examples
- ### getAll(options: Object): Promise
```js
let options = { 
  username: 'haikel',  // (required) -> your npm username
  from: '2019-02-05'   // (optional) -> today - 1 year
  until: '2020-03-21'  // (optional) -> today
  exculde: ['xtra-fs'] // (optional) -> an array of packages to exclude
}

getAll(options)
  .then(results => {  console.log(results); })
  .catch(e => { console.log(e); });
```
- **Response**
```json
{
  "packages": [
    { "name": "makeuid", "downloads": 274 },
    { "name": "node-file-env", "downloads": 481 },
  ..],
  "total": 9695
}
```

- ### **getOne(packageName, from, until): Promise**
```js
getOne('ganco', '2020-02-05', '2020-03-21') // package name required
.then(result => { console.log(result);  })
.catch(e=>{ console.log(e); })
```

- **Response**
```json
{ "package": "ganco", "downloads": 150 }
```

## Notes
- All pull requests are welcome, feel free.

## License
MIT
