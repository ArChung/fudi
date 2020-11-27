import "./loader.scss";

export default {
	name: "loader",
	me: null,

	init() {
		this.hook();
	},
	toggle(active) {
		this.me.toggleClass("active", active);
		// if (this.me.hasClass("active")) {
		// 	this.me.removeClass("active");
		// } else {
		// 	this.me.addClass("active");
		// }
	},
	load(me) {
		this.me = me;
		$(window).on("load", () => {
			me.removeClass("active");
		});
	},
	hook() {
		gee.hook("loader.init", me => {
			this.load(me);
		});
		gee.hook("loader.toggle", active => {
			this.toggle(active);
		});
	}
};
