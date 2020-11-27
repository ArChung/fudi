import './overlay.scss'

var gee = window.gee || require('gene-event-handler').default

export default {
	name: 'overlay',

	$el: null,
	init() {
		this.hook()
		// this.bind()
	},

	// bind() {
	// 	$('body').click(function(el) {
	// 		if ($(el.target).hasClass('overlay')) {
	// 			$(this)
	// 				.removeClass('active')
	// 				.prev()
	// 				.removeClass('active')
	// 		}
	// 	})
	// },

	show({ $parent, mod }) {
		this.$el = $parent.next('.overlay')
		if (this.$el.length) {
			this.$el.addClass('active')
		} else {
			this.$el = $('<a href="#" class="overlay active"></a>')
			$parent.after(this.$el)
		}

		let scrollY =
			window.pageYOffset ||
			document.documentElement.scrollTop ||
			document.body.scrollTop ||
			0
		document.body.style.position = 'fixed'
		document.body.style.top = `-${scrollY}px`
		if (mod && window.App[mod]) {
			this.$el.bind('click', () => {
				window.App[mod].hide()
			})
		}
	},
	hide() {
		const scrollY = document.body.style.top
		document.body.style.position = ''
		document.body.style.top = ''

		setTimeout(() => {
			window.scrollTo(0, parseInt(scrollY || '0', 10) * -1)
		}, 100)

		this.$el.unbind('click').removeClass('active')
	},
	hook() {
		gee.hook('overlay.toggle', me => {
			console.log(me)
		})
	},
}
