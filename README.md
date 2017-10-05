
<h1 align="center">country-currency-data</h1>
<div align="center">
  <strong>Data about currencies of countries</strong>
</div>
<div align="center">
  <a href="https://npmjs.org/package/country-currency-data">
    <img src="https://img.shields.io/npm/v/country-currency-data.svg?style=flat-square" alt="npm package version" />
  </a>
  <a href="https://npmjs.org/package/country-currency-data">
  <img src="https://img.shields.io/npm/dm/country-currency-data.svg?style=flat-square" alt="npm downloads" />
  </a>
  <a href="https://github.com/feross/standard">
    <img src="https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square" alt="standard JS linter" />
  </a>
  <a href="https://github.com/prettier/prettier">
    <img src="https://img.shields.io/badge/styled_with-prettier-ff69b4.svg?style=flat-square" alt="prettier code formatting" />
  </a>
  <a href="https://travis-ci.org/tiaanduplessis/country-currency-data">
    <img src="https://img.shields.io/travis/tiaanduplessis/country-currency-data.svg?style=flat-square" alt="travis ci build status" />
  </a>
  <a href="https://github.com/tiaanduplessis/country-currency-data/blob/master/LICENSE">
    <img src="https://img.shields.io/npm/l/country-currency-data.svg?style=flat-square" alt="project license" />
  </a>
  <a href="http://makeapullrequest.com">
    <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square" alt="make a pull request" />
  </a>
</div>
<br>
<div align="center">
  <a href="https://github.com/tiaanduplessis/country-currency-data/watchers">
    <img src="https://img.shields.io/github/watchers/tiaanduplessis/country-currency-data.svg?style=social" alt="Github Watch Badge" />
  </a>
  <a href="https://github.com/tiaanduplessis/country-currency-data/stargazers">
    <img src="https://img.shields.io/github/stars/tiaanduplessis/country-currency-data.svg?style=social" alt="Github Star Badge" />
  </a>
  <a href="https://twitter.com/intent/tweet?text=Check%20out%20country-currency-data!%20https://github.com/tiaanduplessis/country-currency-data%20%F0%9F%91%8D">
    <img src="https://img.shields.io/twitter/url/https/github.com/tiaanduplessis/country-currency-data.svg?style=social" alt="Tweet" />
  </a>
</div>
<br>
<div align="center">
  Built with ❤︎ by <a href="https://github.com/tiaanduplessis">tiaanduplessis</a> and <a href="https://github.com/tiaanduplessis/country-currency-data/contributors">contributors</a>
</div>

<h2>Table of Contents</h2>
<details>
  <summary>Table of Contents</summary>
  <li><a href="#about">About</a></li>
  <li><a href="#install">Install</a></li>
  <li><a href="#usage">Usage</a></li>
  <li><a href="#contribute">Contribute</a></li>
  <li><a href="#license">License</a></li>
</details>

## About

[![Greenkeeper badge](https://badges.greenkeeper.io/tiaanduplessis/country-currency-data.svg)](https://greenkeeper.io/)

Array of currency information from different countries. Scraped from [XE](http://www.xe.com/symbols.php).

## Install

```sh
$ npm install country-currency-data
# OR
$ yarn add country-currency-data
```

## Usage

```js
const data = require('country-currency-data')
console.log(data)
// [ { country: 'Albania', name: ' Lek', code: 'ALL', symbol: 'Lek' },
//   { country: 'Afghanistan',
//     name: ' Afghani',
//     code: 'AFN',
//     symbol: '؋' },
//   { country: 'Argentina', name: ' Peso', code: 'ARS', symbol: '$' },
//   { country: 'Aruba', name: ' Guilder', code: 'AWG', symbol: 'ƒ' },
//   { country: 'Australia',
//     name: ' Dollar',
//     code: 'AUD',
//     symbol: '$' },
//   { country: 'Azerbaijan New',
//     name: ' Manat',
//     code: 'AZN',
//     symbol: 'ман' }, ...]

```

## Contributing

Contributions are welcome!

1. Fork it.
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

Or open up [a issue](https://github.com/tiaanduplessis/country-currency-data/issues).

## License

Licensed under the MIT License.
