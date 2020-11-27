import './dropdown.scss'
// eslint-disable-next-line
var gee = window.gee || require('gene-event-handler').default

export default {
	name: 'dropdown',

	init() {
		this.hook()
	},
	bind($ta) {
		$ta.click(function() {
			this.toggleClass('open')
		})
	},
	hook() {
		gee.hook('dropdown.init', me => {
			var $ta = me.data('ta') ? $(me.data('ta')) : me.find('a:first-child')
			this.bind($ta)
		})
	},
}
