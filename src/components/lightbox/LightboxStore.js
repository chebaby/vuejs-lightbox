class LightboxStore {

	constructor () {
		this.state =  {
			images: [],
			index: false
		}
	}

	addImage (url) {
		return this.state.images.push(url)
	}

	open (index) {
		this.index = index
	}
}

export default new LightboxStore()