import './drawer.scss'
// eslint-disable-next-line
var gee = window.gee || require('gene-event-handler').default

export default {
	name: 'drawer',
	id: '',
	instance: {},

	init() {
		this.hook()
	},

	setRootDepth() {
		$(this.instance[this.id].root).addClass('z-50')
	},
	resetRootDepth() {
		$(this.instance[this.id].root).removeClass('z-50')
	},

	hide() {
		gee.unfixBody()
		this.resetRootDepth(this.id)
		this.instance[this.id].$el.removeClass('active')
		this.instance[this.id].$el.next().removeClass('active')
		this.instance[this.id]['show'] = false
	},
	show({ endpoint }) {
		gee.fixBody()

		if (endpoint) {
			window.App.loader.toggle(true)
			fetch(window.apiUrl + endpoint, {})
				.then(response => {
					return response.json()
				})
				.then(jsonData => {
					// console.log(jsonData.data)
					this.instance[this.id].$el.html(jsonData.data.data)
					window.App.loader.toggle(false)
				})
				.catch(err => {
					window.App.loader.toggle(false)
					console.log('錯誤:', err)
				})
		}

		this.setRootDepth()
		this.instance[this.id].$el.addClass('active')
		this.overlay()

		this.instance[this.id].show = true
	},

	overlay() {
		const overlay = this.instance[this.id].$el.next()

		if (overlay.hasClass('overlay')) {
			overlay.addClass('active')
		} else {
			this.instance[this.id].$el.after(
				`<a href="javascript:;" class="overlay gee active" data-ta="${
					this.instance[this.id].ta
				}" data-gene="click:drawer.toggle"></a>`
			)
			gee.init()
		}
	},

	toggle({ ta, endpoint }) {
		if (!this.instance[this.id]) {
			const $ta = $(ta)
			const $parents = $ta.parents()
			const $root = $($parents[$parents.length - 3])

			this.instance[this.id] = {
				ta: ta,
				$el: $ta,
				endpoint: endpoint,
				root: $root.attr('class').split(' ')[0],
			}
		}

		if (this.instance[this.id]['show']) {
			this.hide()
		} else {
			this.show({ endpoint })
		}
	},
	hook() {
		gee.hook('drawer.init', me => {
			let $ta = $(me.data('ta'))
			$ta.addClass('--' + me.data('direction'))
		})

		gee.hook('drawer.toggle', me => {
			if (!me.data('ta')) return
			// this.endpoint = me.data('endpoint')
			this.id = me.data('ta').replace(/[#. ,:-]+/g, '')
			this.toggle({
				// scroll: me.data('scroll'),
				ta: me.data('ta'),
				endpoint: me.data('endpoint'),
			})
			// }
		})
	},
}
