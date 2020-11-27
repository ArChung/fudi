// import $ from 'jquery'
// import gee from 'gene-event-handler'

var app = function () {
	'use strict'
	var that = this
	that.config = {
		baseUrl: window.apiUrl,
		detectWidth: 768,
		keys: {
			TAB: 9,
			ENTER: 13,
			ESC: 27,
			ARROW_UP: 38,
			ARROW_DOWN: 40,
		},
	}
	var app = {
		fontSize: 1.25,

		errMsg: {
			e9100: '資料庫發生錯誤',
			e9101: '資料庫發生錯誤',
			e9102: '資料庫發生錯誤',
			e9103: '資料庫發生錯誤',
			e8100: '請輸入必填欄位',
		},
		use(mod) {
			if (gee.isset(mod) && gee.isset(mod.name)) {
				app[mod.name] = mod
			} else {
				console.log('mod 需要命名')
			}
			if (gee.isset(mod.init)) {
				app[mod.name].init()
				console.log(mod.name + ' init!!!')
			}
		},
		init: function () {
			app.win = $(window)
			app.docu = $(document)
			app.body = app.win.opera
				? app.docu.compatMode == 'CSS1Compat'
					? $('html')
					: $('body')
				: $('body')

			app.screen =
				$('body').width() < that.config.detectWidth ? 'mobile' : 'tablet'

			app.body.addClass(app.screen)

			var platform = navigator.platform

			switch (platform) {
				case /iPad|iPhone|iPod/.test(platform):
					app.platform = 'IOS'

					break
				case /Android/.test(platform):
					app.platform = 'ANDROID'

					break
				case /Windows|Win32/.test(platform):
					app.platform = 'WIN'

					break

				default:
					break
			}

			gee.mainUri = window.mainUrl
			gee.apiUri = window.apiUrl
			gee.assetsUri = window.assetsUrl

			// if (!app.isProd()) {
			// 	gee.mainUri = 'https://loc.api.shopartner.co:4433/'
			// 	gee.apiUri = 'https://loc.api.shopartner.co:4433/'
			// 	if (app.isChieh()) {
			// 		window.mockUrl =
			// 			'http://' +
			// 			$(location).attr('hostname') +
			// 			':' +
			// 			$(location).attr('port') +
			// 			'/mock'
			// 	}
			// }

			// if ($(location).attr('port') !== '9001') {
			// 	// (typeof app.preview === 'undefined') { // $(location).attr('port') !== '9001'
			// 	app.tmplPath = gee.assetsUri + app.tmplPath
			// }

			gee.init()
		},
	}
	return app
}

export default app
