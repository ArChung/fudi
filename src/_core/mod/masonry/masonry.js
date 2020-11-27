import './masonry.scss'
var gee = window.gee || require('gene-event-handler').default
// var app = window.App
var imagesLoaded = require('imagesloaded')
imagesLoaded.makeJQueryPlugin($)
var jQueryBridget = require('jquery-bridget')
var Isotope = require('isotope-layout')
// make Isotope a jQuery plugin
jQueryBridget('isotope', Isotope, $)

export default {
	name: 'masonry',
	instance: {},

	init() {
		this.hook()
	},

	bind({ uid, $grid, item, filter, cb }) {
		var vm = this

		// setTimeout(() => {

		vm.instance[uid] = $grid.isotope({
			// columnWidth: item,
			itemSelector: item,
			percentPosition: true,
			gutter: 0,
			layoutMode: 'fitRows',
		})

		if (filter) {
			var $filterNav = $(filter)
			var filterValue = '*'
			var $first = $filterNav.find('li:nth-child(1) a')
			$first.addClass('active')

			vm.instance[uid].isotope({ filter: $first.attr('data-filter') })
			$filterNav.on('click', 'a', function() {
				var $this = $(this)

				// var $parent = $this.parent('li')
				if (!$this.hasClass('active')) {
					$filterNav.find('.active').removeClass('active')
					$this.addClass('active')
					// .siblings('li')
					// .removeClass('active')

					filterValue = $this.attr('data-filter')
				} else {
					filterValue = '*'
					$this.removeClass('active')
				}
				vm.instance[uid].isotope({ filter: filterValue })
			})
		}

		if (cb && typeof window.gee[cb] === 'function') {
			console.log('callback')
			vm.instance[uid].on('arrangeComplete', window.gee[cb]())
		}
	},

	hook() {
		gee.hook('masonry.init', me => {
			var vm = this
			var uid = me.data('uid')

			var cb = me.data('masonry-cb')
			var filter = me.data('masonry-filter')
			var item = me.data('item') || '.grid .item'

			var $grid = me.find('.container')

			$grid
				.imagesLoaded()
				.always(function() {
					vm.bind({ $grid, uid, item, filter, cb })
					console.log('all images loaded')
				})
				.done(function() {
					console.log('all images successfully loaded')
				})
				.fail(function() {
					console.log('all images loaded, at least one is broken')
				})
				.progress(function(instance, image) {
					// var result = image.isLoaded ? 'loaded' : 'broken'
					// console.log('image is ' + result + ' for ' + image.img.src)
				})
		})
	},
}
