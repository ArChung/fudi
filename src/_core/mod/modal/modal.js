import "./modal.twig";
import "./modal.scss";
// var gee = window.gee || require('gene-event-handler').default
// var app = window.app

export default {
	name: "modal",

	init() {
		this.hook();
	},

	toggle({ ta, endpoint, title, size }) {
		const $ta = $(ta);
		const self = this;
		var dAction = function(ssr) {
			let scrollY =
				window.pageYOffset ||
				document.documentElement.scrollTop ||
				document.body.scrollTop ||
				0;
			document.body.style.position = "fixed";
			document.body.style.top = `-${scrollY}px`;

			if (ssr) {
				$ta.addClass("ssr");
			} else {
				window.App.loader.toggle(false);
				if (this.data) {
					$ta.find(".modal-wrap").html(this.data.data.content);
				}
			}

			let $parents = $ta.parents();
			self.$root = $($parents[$parents.length - 3]);
			self.$root.addClass("z-50");
			$ta
				.addClass("active")
				.after(
					`<a href="javascript:;" class="overlay gee active" data-ta="${ta}" data-gene="click:modal.toggle"></a>`
				);
			gee.init();
		};

		// 關閉

		if ($ta.hasClass("active")) {
			const scrollY = document.body.style.top;
			document.body.style.position = "";
			document.body.style.top = "";
			window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
			self.$root.removeClass("z-50");
			self.$root = {};

			$ta
				.removeClass("active")
				.next()
				.remove();
		} else {
			if (endpoint) {
				window.App.loader.toggle(true);
				gee.yell(endpoint, {}, dAction, dAction);
			} else {
				dAction(true);
			}
		}
	},

	hook() {
		gee.hook("modal.toggle", me => {
			var size = me.data("size") ? me.data("size") : "nor";
			this.toggle({
				ta: me.data("ta") || ".modal.layout-modal",
				title: me.data("title"),
				endpoint: me.data("endpoint"),
				size
			});
			// }
		});
	}
};
