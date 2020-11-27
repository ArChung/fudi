import AOS from 'aos'
// import $ from 'jquery';
var gee = window.gee || require('gene-event-handler').default
import 'aos/dist/aos.css'
import './scroll.scss'

export default {
	name: 'scroll',
	navClass: '.scroll-nav',
	spots: null,
	rendered: false,
	init() {
		console.log('scroll OK')
		this.hook()
	},

	init_(config) {
		if (config.nav) {
			this.spots = $('div[data-aos-id="spot"]')
			this.render()
			this.bind()
		}
		console.log('aos')

		AOS.init()
	},
	bind() {
		document.addEventListener('aos:in:spot', ({ detail }) => {
			var idx = this.spots.index($(detail))
			// 因為nth所以idx直接可用
			$(`${this.navClass} li:nth(${idx})`)
				.siblings('.active')
				.removeClass('active')
				.end()
				.addClass('active')
		})
	},

	render() {
		if (this.rendered) return
		this.rendered = true
		var html = '<ul class="scroll-nav">'
		html +=
			'<li class="text-white" ><a class="gee"  data-gene="click:scroll.to"></a></li>'
		this.spots.each(i => {
			html += `<li class="gee link text-white" data-gene="click:scroll.to">
									<a href="#" class=""></a>
							</li>`
		})
		html += '</ul>'

		$('body').prepend(html)
		setTimeout(() => {
			gee.init()
		}, 100)
	},

	to({ idx }) {
		var scrollTop = idx === 0 ? 0 : $(this.spots[idx - 1]).offset().top
		$('html, body').animate({ scrollTop }, 500)
	},

	hook() {
		gee.hook('scroll.init', me => {
			this.init_({ nav: me.data('nav') })
		})
		gee.hook('scroll.to', me => {
			if (me.hasClass('active')) return
			this.to({ idx: me.index() })
		})
	},
}
