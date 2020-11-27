const webfontsGenerator = require("webfonts-generator");
const fs = require("fs");
const path = require("path");
const _ = require("underscore");

const SRC = path.join(__dirname, "../../src/icons/svg/");
const FILES = _.map(fs.readdirSync(SRC), function(file) {
	return path.join(SRC, file);
});

const TYPES = ["woff2", "woff"];
const NAME = "icon";
const OPTIONS = {
	dest: "src/assets/icons/",
	files: FILES,
	fontName: NAME,
	normalize: true,
	fontHeight: 1001,
	types: TYPES,
	order: TYPES,
	cssFontsUrl: "/assets/icons/",
	cssDest: "src/assets/icons/" + "_" + NAME + ".css",
	cssTemplate: "src/icons/css.hbs"
};

webfontsGenerator(OPTIONS, function(error) {
	if (error) console.log("Fail!", error);
	else console.log("Done!");
});
