

require('./bootstrap');

window.Vue = require('vue');

//thought-component   va ser la etiqueta para llamrlo en html
//ThoughtComponent.vue  el componente ubicado en la carpeta resources/assets/js/comoponnent

Vue.component('my-thought-component', require('./components/MyThoughtComponent.vue'));

const app = new Vue({
    el: '#app'
});
