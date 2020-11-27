import './accordion.scss'

require('./accordion-list.twig')
require('./accordion-item.twig')
// eslint-disable-next-line
var gee = window.gee || require('gene-event-handler').default

export default {
	name: 'accordion',

	init() {
		this.hook()
	},
	hook() {
		gee.hook('accordion.toggle', me => {
			me.parent('.accordion').toggleClass('active')
		})
	},
}
