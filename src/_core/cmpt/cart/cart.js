import './mini-cart.scss'
import './item.scss'
// import gee from 'gene-event-handler';
var gee = window.gee || require('gene-event-handler').default
// 外掛
gee.hook('cart.show', () => {
	if (typeof window.public_woo_amc_show === 'function') {
		window.public_woo_amc_show()
	}
})

export default {
	name: 'cart',
	init() {},
}
