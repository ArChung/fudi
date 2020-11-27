import './notice.scss'

export default {
	name: 'notice',
	init() {
		this.hook()
	},
	hook() {
		gee.hook('notice.slideIn', me => {
			// var pos = me.data('pos') || 'right'
			me.addClass('active')
			setTimeout(() => {
				me.fadeOut('fast')
			}, 4000)
		})
	}
}
