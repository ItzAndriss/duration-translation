# duration-translation

[![npm version](https://badge.fury.io/js/duration-translation.svg)](https://www.npmjs.com/package/duration-translation)

The `duration-translation` package is a lightweight npm module that allows you to translate time durations into different languages. It provides a simple and flexible way to convert seconds, minutes, hours, days, months and years into their corresponding localized forms.

## Installation

Install the package using npm:


npm install duration-translation
Usage
Import the package into your project:

```javascript
const duration = require('duration-translation');

//Translate a duration to a specific language:
let translatedDuration = duration('1m', 'hu');
console.log(translatedDuration); // Output: '1 perc'
```
You can use the duration function to translate time durations into various languages. The first argument is the duration string (e.g., '1m' for 1 minute), and the second argument is the language code (e.g., 'hu' for Hungarian).

# Contributing
Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request on the [GitHub repository](github.com/ItzAndriss/duration-translation/).

# License
This package is open source and available under the [MIT License](https://opensource.org/license/mit/).
