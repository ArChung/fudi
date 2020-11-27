import './gallery.scss'
import 'simple-lightbox/dist/simpleLightbox.css'
var SimpleLightbox = require('simple-lightbox')
SimpleLightbox.registerAsJqueryPlugin($)
var gee = window.gee || require('gene-event-handler').default
export default {
	name: 'gallery',
	scrollY: 0,

	init() {
		this.hook()
	},
	hook() {
		gee.hook('gallery.init', me => {
			// eslint-disable-next-line
			var lightbox = new SimpleLightbox({ elements: me.find('a') })
		})

		// gee.hook('drawer.toggle', me => {
		// 	let ta = me.data('ta')
		// 	let $ta = $(ta)
		// 	if ($ta.hasClass('active')) {
		// 		const scrollY = document.body.style.top
		// 		document.body.style.position = ''
		// 		document.body.style.top = ''
		// 		window.scrollTo(0, parseInt(scrollY || '0', 10) * -1)

		// 		$ta
		// 			.removeClass('active')
		// 			.next()
		// 			.remove()
		// 	} else {
		// 		let scrollY =
		// 			window.pageYOffset ||
		// 			document.documentElement.scrollTop ||
		// 			document.body.scrollTop ||
		// 			0
		// 		document.body.style.position = 'fixed'
		// 		document.body.style.top = `-${scrollY}px`
		// 		$ta
		// 			.addClass('active')
		// 			.after(
		// 				'<a href="javascript:;" class="overlay gee" data-ta="' +
		// 					ta +
		// 					'" data-gene="click:drawer.toggle"></a>'
		// 			)
		// 		gee.init()
		// 	}
		// })
	},
}
