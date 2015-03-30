## rss  [![Build Status](http://img.shields.io/travis/Alir3z4/node-money-currencies.svg)](https://travis-ci.org/Alir3z4/node-money-currencies) [![money-currencies](http://img.shields.io/npm/Alir3z4/money-currencies.svg)](https://www.npmjs.org/package/money-currencies)


# Money Currencies

Display money format and its filthy currencies, for all money lovers out there.


## Installation

```
npm install money-currencies --save
```

## Usage

```
var MoneyCurrency = require('money-currencies');

mc = new MoneyCurrency('USD');
console.log(mc.moneyFormat(13)) // $13
console.log(mc.moneyWithCurrencyFormat(13)) // $13 USD
```

## Tests

```
npm test
```

## Contributing

Contributions to the project are welcome. Feel free to fork and improve.
I do my best accept pull requests in a timely manor,
especially when tests and updated docs are included.

## License

Copyright (c) 2015 Alireza Savand, contributors.

Released under the [MIT license](https://tldrlegal.com/license/mit-license).
