<h1 align="center">Captcha Generator</h1>

Captcha Generator is a Node library for quickly and easily generating captcha images. Forked from [HaileyBot/captcha-generator](https://github.com/HaileyBot/captcha-generator) for colorful alphanumeric captchas and adjustable variations.

![Sample](sample.jpeg)

## Installation

```bash
npm i @yokilabs/captcha-generator
yarn add @yokilabs/captcha-generator
```

## Usage

### Basic

```js
// Import the module
const Captcha = require("@yokilabs/captcha-generator");
import Captcha from "@yokilabs/captcha-generator";

// Create a new Captcha object
//  - Optional argument to specify image height (250 to 400px, default 250)
//    - Image width is 400px
//  - Returned object will contain 4 properties
//    - "PNGStream" is a stream object for the image file in PNG format
//    - "JPEGStream" is a stream object for the image file in JPEG format
//    - "dataURL" is a data URL containing the JPEG image data
//    - "value" is the 6 character code the image contains
let captcha = new Captcha();
console.log(captcha.value);
```

### Save to file example

```js
const path = require("path"),
	fs = require("fs"),
const Captcha = require("@yokilabs/captcha-generator");
import Captcha from "@yokilabs/captcha-generator";

let captcha = new Captcha();
captcha.PNGStream.pipe(fs.createWriteStream(path.join(__dirname, `${captcha.value}.png`)));
captcha.JPEGStream.pipe(fs.createWriteStream(path.join(__dirname, `${captcha.value}.jpeg`)));
```

## License

This project is licensed under [GPL-3.0](https://github.com/yoki-labs/captcha-generator/blob/main/LICENSE.md)
