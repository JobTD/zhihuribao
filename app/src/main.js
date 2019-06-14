// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MintUI from 'mint-ui'
import { Swipe, SwipeItem } from 'mint-ui';

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
import 'mint-ui/lib/style.css'
Vue.config.productionTip = false
import 'animate.css'
import jquery from 'jquery'
Vue.prototype.$ = jquery
import axios from 'axios'
Vue.prototype.$http = axios;
import swal from 'sweetalert'
Vue.prototype.$swal = swal;
import commonCom from './components/commont'
for (var i in commonCom) { Vue.component(i, commonCom[i]) }
import Filter from './filter'
for (var i in Filter) { Vue.filter(i, Filter[i]) }
/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})