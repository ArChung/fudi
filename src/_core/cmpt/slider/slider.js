import './slider.scss'
import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel/dist/assets/owl.theme.default.css'
import 'owl.carousel'
require('./slider.twig')
// import gee from 'gene-event-handler';
var gee = window.gee || require('gene-event-handler').default

gee.hook('slider.init', me => {
	var ta = me.data('ta') ? $(me.data('ta')) : me

	ta.addClass('carousel carousel-container owl-carousel')

	var props = me.data()

	console.log(props)
	props.lazyLoad = me.data('lazy')
	var config = {
		autoplay: false,
		autoplayTimeout: 5000,
		autoplayHoverPause: true,
		loop: true,
		nav: true,
		lazyLoad: true,
		margin: props.gap,
		navText: [
			"<i class='icon icon-angle-left'></i>",
			"<i class='icon icon-angle-right'></i>",
		],
		dots: true,
		items: props.cols[0] || 4,
		autoHeight: props.ah,
		responsive: {
			0: {
				items: props.cols[2] || 2,
				margin: props.gap / 2 || 10,
			},
			600: {
				items: props.cols[1] || 3,
				margin: props.gap || 20,
			},
			1000: {
				items: props.cols[0],
				margin: props.gap || 40,
			},
		},
	}

	Object.keys(props).forEach(function(k) {
		if (!config[k]) return
		config[k] = props[k]
	})

	ta.owlCarousel(config)
})
