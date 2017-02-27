import Vue from 'vue'
import Store from './LightboxStore'

Vue.directive('lightbox', {

	bind (el, binding) {
		let index = Store.addImage(el.getAttribute('href'))
		el.addEventListener('click', function(event) {
			event.preventDefault()
			Store.open(index)
		})
	}
})