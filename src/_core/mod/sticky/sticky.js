var gee = window.gee || require('gene-event-handler').default
import './sticky.scss'

export default {
	name: 'sticky',

	init() {
		console.log('sticky OK')
		this.hook()
	},

	hook() {
		gee.hook('sticky.init', me => {
			window.onscroll = function() {
				me.toggleClass('sticky', window.pageYOffset > me.data('offset'))
			}
		})
	},
}
