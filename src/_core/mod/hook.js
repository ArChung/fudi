// import $ from 'jquery';
var gee = window.gee || require('gene-event-handler').default
gee.hook('toggleClass', me => {
	let ta = me.data('ta') || me
	var classes = me.data('cls').split(' ')
	$(ta)
		.removeClass(classes[0])
		.addClass(classes[1])
})

// gee.hook('fixBody', () => {
// 	let scrollY =
// 		window.pageYOffset ||
// 		document.documentElement.scrollTop ||
// 		document.body.scrollTop ||
// 		0
// 	document.body.style.position = 'fixed'
// 	document.body.style.top = `-${scrollY}px`
// })
// gee.hook('unfixBody', () => {
// 	const scrollY = document.body.style.top
// 	document.body.style.position = ''
// 	document.body.style.top = ''
// 	window.scrollTo(0, parseInt(scrollY || '0', 10) * -1)
// })
gee.hook('uuid', () => {
	let d = Date.now()
	if (
		typeof performance !== 'undefined' &&
		typeof performance.now === 'function'
	) {
		d += performance.now() //use high-precision timer if available
	}
	return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
		var r = (d + Math.random() * 16) % 16 | 0
		d = Math.floor(d / 16)
		return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16)
	})
})
// gee.hook('fetch', (url, params) => {
// 	return fetch(window.apiUrl + url, params)
// 		.then(response => {
// 			console.log(response)

// 			return response.json()
// 		})
// 		.then(jsonData => {
// 			console.log(jsonData)
// 		})
// 		.catch(err => {
// 			console.log('錯誤:', err)
// 		})
// })

export default {
	name: 'hook',
	init() {},
}
