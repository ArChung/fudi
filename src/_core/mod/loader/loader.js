import './loader.scss'
require('./loader.twig')
export default {
	name: 'loader',
	me: null,

	init() {
		this.hook()
	},
	toggle(active) {
		console.log(active)
		if (active !== 'undifined') {
			if (active) {
				this.me.addClass('active')
			} else {
				this.me.removeClass('active')
			}
		} else {
			if (this.me.hasClass('active')) {
				this.me.removeClass('active')
			} else {
				this.me.addClass('active')
			}
		}
	},
	load(me) {
		this.me = me
		// $(window).on('load', () => {
		me.removeClass('active')
		// })
	},
	hook() {
		gee.hook('loader.init', me => {
			this.load(me)
		})
		gee.hook('loader.toggle', active => {
			this.toggle(active)
		})
	},
}
