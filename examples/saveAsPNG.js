const path = require("path"),
	fs = require("fs"),
	Captcha = require("../");

let captcha = new Captcha();
captcha.canvas.createPNGStream().pipe(fs.createWriteStream(path.join(__dirname, `${captcha.value}.png`)));