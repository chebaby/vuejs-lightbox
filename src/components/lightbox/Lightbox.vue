<template>
	<div class="lightbox" v-if="image">
		<lightbox-image :image="image"></lightbox-image>
	</div>
</template>


<script>
	import './lightboxDirective'
	import Store from './LightboxStore'

	export default {
		name: 'lightbox',

		data () {
			return {
				state: Store.state
			}
		},

		computed: {

			image () { 
				if(this.state.index !== false){

					return this.state.images[this.state.index]
				}
			}
		}
	}
</script>

<style type="text/css" src="./lightbox.css"></style>