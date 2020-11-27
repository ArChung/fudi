import PerfectScrollbar from 'perfect-scrollbar'
import './scrollbar.scss'

export default {
	name: 'scrollbar',

	spots: null,
	init() {
		this.hook()
	},

	bind(dom) {
		// eslint-disable-next-line
		const scroll = new PerfectScrollbar(dom, {
			swipeEasing: true,
			// wheelSpeed: 2,
			// wheelPropagation: true
			// minScrollbarLength: 20
		})
	},

	hook() {
		gee.hook('scrollbar.init', me => {
			this.bind(me[0])
		})
	},
}
