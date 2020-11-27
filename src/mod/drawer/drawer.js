import "./drawer.scss";
// eslint-disable-next-line
// var gee = window.gee || require("gene-event-handler").default;
import loader from "../loader/loader";

export default {
	name: "drawer",
	endpoint: "",

	uid: null,
	instance: {},
	init() {
		this.hook();
	},

	set({ ta, endpoint, uid }) {
		this.uid = uid;
		if (!this.instance[this.uid]) {
			this.instance[this.uid] = {};
			this.instance[this.uid].ta = ta;
			this.instance[this.uid].$el = $(ta);
			const $parents = this.instance[this.uid].$el.parents();
			this.instance[this.uid].$root = $($parents[$parents.length - 3]);

			this.instance[this.uid].$el.find(".close").click(() => {
				this.hide({ uid: this.uid });
			});
			// if (scroll) {
			// 	this.instance[this.uid].scroll = new PerfectScrollbar(ta)
			// }
		}
		if (endpoint && this.endpoint !== endpoint) {
			this.endpoint = endpoint;
			loader.toggle(true);
			fetch(window.apiUrl + endpoint, {})
				.then(response => {
					return response.json();
				})
				.then(json => {
					console.log(json);
					this.instance[this.uid].$el
						.children()
						.not(".close")
						.remove();

					this.instance[this.uid].$el.append(json.data.data.content);

					this.show();
					loader.toggle(false);
				})
				.catch(err => {
					loader.toggle(false);
					console.log("錯誤:", err);
				});
		} else {
			this.show();
		}

		// if (closeBtn) {
		// 	this.instance[this.uid].$el.prepend(`<div class="close">${ta}</div>`)
		// }
	},
	hide({ ta, uid }) {
		let $el = {};
		let $root = {};

		if (uid) {
			$el = this.instance[uid].$el;
			$root = this.instance[uid].$root;
		} else if (ta) {
			Object.keys(this.instance).find(x => {
				this.instance[x].ta === ta;
				$root = this.instance[x].$root;
			});
		} else {
			$el = this.instance[this.uid].$el;
			$root = this.instance[this.uid].$root;
		}

		$el.removeClass("active");
		setTimeout(() => {
			this.hideOverlay(this.uid);
			this.uid = null;
			$root.removeClass("active");
		}, 200);
	},

	show() {
		this.instance[this.uid].$root.addClass("active");
		this.instance[this.uid].$el.addClass("active");
		this.showOverlay();
	},

	showOverlay() {
		if (!this.instance[this.uid].$overlay) {
			var $overlay = this.instance[this.uid].$el.next(".overlay");

			if ($overlay.length) {
				this.instance[this.uid].$overlay = $overlay;
				this.instance[this.uid].$overlay.addClass("active");
			} else {
				this.instance[this.uid].$overlay = $(
					'<a href="javascript:;" class="overlay active"/>'
				);

				this.instance[this.uid].$el.after(this.instance[this.uid].$overlay);
			}

			this.instance[this.uid].$overlay.bind("click", () => {
				this.hide({});
			});
		} else {
			this.instance[this.uid].$overlay.addClass("active");
		}

		// let scrollY =
		// 	window.pageYOffset ||
		// 	document.documentElement.scrollTop ||
		// 	document.body.scrollTop ||
		// 	0
		// document.body.style.position = 'fixed'
		// document.body.style.top = `-${scrollY}px`
	},
	hideOverlay(uid) {
		const _uid = uid;
		// const scrollY = document.body.style.top
		// document.body.style.position = ''
		// document.body.style.top = ''

		setTimeout(() => {
			// window.scrollTo(0, parseInt(scrollY || '0', 10) * -1)

			this.instance[_uid].$overlay.removeClass("active");
		}, 100);
	},
	hook() {
		gee.hook("drawer.init", me => {
			let $ta = $(me.data("ta"));
			$ta.addClass("--" + me.data("direction"));
		});

		gee.hook("drawer.hide", me => {
			var uid = me.data("uid")
				? me.data("uid")
				: me.data("ta").replace(/[#. ,:-]+/g, "");
			this.hide({
				uid: uid,
				ta: me.data("ta")
			});
		});

		gee.hook("drawer.show", me => {
			if (!me.data("ta")) {
				console.log("data-ta is required");
				return;
			}
			var uid = me.data("uid")
				? me.data("uid")
				: me.data("ta").replace(/[#. ,:-]+/g, "");
			this.set({
				uid: uid,
				ta: me.data("ta"),
				endpoint: me.data("endpoint")
			});
			// }
		});
		gee.hook("drawer.toggle", me => {
			if (!me.data("ta")) {
				console.log("data-ta is require");
				return;
			}
			if ($(me.data("ta")).hasClass("active")) {
				gee["drawer.hide"](me);
			} else {
				gee["drawer.show"](me);
			}
		});
	}
};
