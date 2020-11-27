require('./appBar.twig')
require('./_brand.twig')
require('./_icons.twig')
require('./_menu.wp.twig')
import './appBar.scss'
// import './scripts/index.js'
gee.hook('appBar.init', me => {
	me.find('.dropdown a').click(function() {
		$(this)
			.parent('li.dropdown')
			.toggleClass('open')
		// alert( 'Handler for .click() called.' )
	})
	if (me.data('sticky')) {
		window.onscroll = function() {
			me.toggleClass('sticky', window.pageYOffset > 100)
		}
	}
	if (me.data('pull')) {
		me.css({
			marginBottom: me.parent('.app-header').height() * -1 + 'px',
		})
	}
})
