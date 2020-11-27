import "./tab.scss";

export default {
	name: "tab",
	init() {
		console.log("tab init");
		this.hook();
	},
	bind({ me, endpoint }) {
		var $content = me.find(".tab-content");
		var $nav = me.find(".tab-nav");
		$nav.find("li:first-child").addClass("active");
		$content.find("div:first-child").addClass("active");
		$nav.find("a").click(function(e) {
			e.preventDefault();
			var $btn = $(this).parent("li");
			if ($btn.hasClass("active")) return;

			$btn
				.siblings(".active")
				.removeClass("active")
				.end()
				.toggleClass("active");
			$content
				.find($btn.find("a").attr("href"))
				.siblings(".active")
				.removeClass("active")
				.end()
				.toggleClass("active");
		});
	},
	hook() {
		gee.hook("tab.init", me => {
			this.bind({
				me
			});
		});
	}
};
