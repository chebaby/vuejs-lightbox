<!-- I stacked with v-for in lightbox (image can't load maybe i need the net) minut 10:47 -->
<template>
  <div id="app">
    <a  v-lightbox href="http://localhost:8080/static/img/1.e959001.jpeg">
      <img src="./assets/1.jpeg" height="150px" alt="">
    </a>
    <a  v-lightbox href="http://localhost:8080/static/img/2.7243105.jpg">
      <img src="./assets/2.jpg" height="150px" alt="">
    </a>
    <a  v-lightbox href="http://localhost:8080/static/img/3.6c1a372.jpg">
      <img src="./assets/3.jpg" height="150px" alt="">
    </a>
    <a  v-lightbox href="http://localhost:8080/static/img/4.5b1ae98.jpg">
      <img src="./assets/4.jpg" height="150px" alt="">
    </a>

    <lightbox></lightbox>
  </div>
</template>

<script>
import Lightbox from './components/lightbox/Lightbox.vue'

export default {
  name: 'app',
  components: {
    Lightbox
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
