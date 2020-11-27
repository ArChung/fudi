import "./modal.scss";
var gee = window.gee || $.fn.gene;
// var app = window.app
export default {
	name: "modal",

	cls: "",
	$root: null,

	init() {
		console.log("modal init");
		this.hook();
	},

	fixBody() {
		let scrollY =
			window.pageYOffset ||
			document.documentElement.scrollTop ||
			document.body.scrollTop ||
			0;
		document.body.style.position = "fixed";
		document.body.style.top = `-${scrollY}px`;
	},

	toggle({ ta, endpoint, title, topic, size, content, cls }) {
		const $ta = $(ta);

		const self = this;

		var dAction = function(ssr) {
			self.fixBody();

			if (!ssr && this.data) {
				$ta.find(".modal-content").html(this.data.data.content);
			}

			if (ssr && content) {
				$html = `
				<div>
				<h2>${title}</h2>
				<p>${topic}</p>
				</div>
				${content}`;
				$ta
					.find(".modal-content")
					.html(`<div class="bg-white rounded-lg p-8">${content}</div>`);
			}

			window.App.loader.toggle(false);
			let $parents = $ta.parents();
			self.$root = $($parents[$parents.length - 3]);
			self.$root.addClass("z-50");
			$ta.addClass("active ");
			if (cls) {
				self.cls = cls;
				$ta.addClass(self.cls);
			}

			$ta.after(
				`<a href="javascript:;" class="overlay gee" data-ta="${ta}" data-gene="click:modal.toggle"></a>`
			);
			gee.init();
		};
		if ($ta.hasClass("active")) {
			const scrollY = document.body.style.top;
			document.body.style.position = "";
			document.body.style.top = "";
			window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
			self.$root.removeClass("z-50");
			self.$root = {};

			if (self.cls) {
				$ta.removeClass(self.cls);
				self.cls = "";
			}

			var $modalContent = $ta.removeClass("active").find(".modal-content");

			if (content) {
				$modalContent.empty();
			}

			$ta.next().remove();
		} else {
			self.cls = cls;
			if (endpoint) {
				window.App.loader.toggle(true);
				// fetch("./data/test.json").then(res => {
				// 	console.log(res);
				// });
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
				content: me.data("content") || null,
				title: me.data("title"),
				topic: me.data("topic"),
				cls: me.data("cls"),
				endpoint: me.data("endpoint"),
				size
			});
			// }
		});
	}
};
