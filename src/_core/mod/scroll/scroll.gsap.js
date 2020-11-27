// import { gsap } from 'gsap'
// import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

import './scroll.scss'
export default {
	name: 'scroll',

	init() {
		this.hook()
	},

	hook() {
		gee.hook('scroll.init', me => {})
	},
}
