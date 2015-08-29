# plott-wifi-scanner

[![build status](https://secure.travis-ci.org/Plott/plott-mongo-models.png)](http://travis-ci.org/Plott/plott-wifi-scanner)

Scans surrounding area for wireless access points and routers.


### `plott.wifiscanner(Function)`

Scans surrounding area for wireless access points and routers.


### Parameters

| parameter  | type     | description                                           |
| ---------- | -------- | ----------------------------------------------------- |
| `Function` | Callback | Returns object array of access points with rssi value |


### Example

```js
plott.wifiscanner(function(err, data){
--Do something
});
```


**Returns** `Function`,

## Installation

Requires [nodejs](http://nodejs.org/).

```sh
$ npm install plott-wifi-scanner
```

## Tests

```sh
$ npm test
```

## Source module
[![node-wifiscanner](https://github.com/mauricesvay/node-wifiscanner)
