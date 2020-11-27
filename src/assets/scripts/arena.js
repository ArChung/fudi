/* eslint-disable*/
import $ from "jquery";
var gee = gee || $.fn.gene;
(function(app, gee, $) {
	"use strict";
	// register a module name
	app.arena = {
		cuModal: null,
		feed: null,
		init: function() {
			// app.arena.adjustAjax();
			// app.arena.initSlider($('#slider-range1'));
			// if (navigator.userAgent.match(/iPhone|iPad|iPod/i)) {
			// 	app.arena.handler();
			// 	$(window).bind('touchend touchcancel touchleave', function (e) {
			// 		app.arena.handler();
			// 	});
			// } else {
			// 	$(window).bind('scroll', _.throttle(function () {
			// 		app.arena.handler();
			// 	}, 50));
			// }
			// localforage.ready().then(function () {
			// 	app.arena.feed = localforage.createInstance({
			// 		name: 'arenaBase',
			// 		version: 1
			// 	});
			// 	gee.clog('-------------------------- localforage start -----------------------------');
			// 	// app.lang.init();
			// 	app.arena.initFontSize();
			// }).catch(function (e) {
			// 	gee.clog(e);
			// 	app.track.send('failure', 'init_localforage', JSON.stringify(e));
			// });
		},

		handler: function() {
			var currentWindowPosition = $(window).scrollTop();
			if (currentWindowPosition > 10) {
				$("body").addClass("scrolling");
			} else {
				$("body").removeClass("scrolling");
			}
			// if (currentWindowPosition > 300) {
			//     $('.goTop').show();
			// } else {
			//     $('.goTop').hide();
			// }
		}
	};

	gee.hook("toggleDrawer", function(me, e) {
		let ta = me.data("ta");
		let $ta = $(ta);
		if ($ta.hasClass("active")) {
			$ta
				.removeClass("active")
				.next()
				.remove(".drawer-bg");
		} else {
			$ta
				.addClass("active")
				.after(
					'<a href="javascript:;" class="drawer-bg gee" data-ta="' +
						ta +
						'" data-gene="click:toggleDrawer"></a>'
				);
			gee.init();
		}
	});
})(app, gee, jQuery);
