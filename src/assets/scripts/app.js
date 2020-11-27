/**
 * app
 */

var gee = window.gee || $.fn.gene;
window.gee = gee;

var App = function() {
	"use strict";

	var that = this;

	that.config = {
		detectWidth: 600
	};

	var app = {
		// pageCounter: 1,
		// pageLimit: 10,

		// fontSize: 1.25,

		redo: null,

		module: {},

		tmplStores: {},
		htmlStores: {},
		tmplPath: "./app/tmpls",
		use: function(mod) {
			if (gee.isset(mod) && gee.isset(mod.name)) {
				app[mod.name] = mod;
			} else {
				console.log("mod 需要命名");
			}
			if (gee.isset(mod.init)) {
				app[mod.name].init();
				// console.log(mod.name + " init!!!");
			}
		},
		init: function(modules) {
			app.win = $(window);
			app.docu = $(document);
			app.body = app.win.opera
				? app.docu.compatMode === "CSS1Compat"
					? $("html")
					: $("body")
				: $("body");

			app.screen =
				app.body.width() < that.config.detectWidth ? "mobile" : "tablet";
			app.body.addClass(app.screen);

			if (app.body.height() < app.win.height()) {
				var h =
					app.win.height() -
					$(".app-header").outerHeight() -
					$(".app-footer").outerHeight() -
					$(".navbar").outerHeight() -
					$(".necker").outerHeight();
				$(".bodier").css("height", h + "px");
			}

			gee.apiUri = window.apiUrl + "";
			gee.mainUri = window.mainUrl;

			gee.init();

			if (modules && modules.length > 0) {
				modules.map(function(module) {
					if (gee.isset(app[module]) && gee.isset(app[module].init)) {
						app[module].init();
					}
				});
			}
		}
	};

	return app;
};

window.App = new App(); /* eslint-disable */
