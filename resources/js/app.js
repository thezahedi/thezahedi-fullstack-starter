import Vue from "vue";
import router from "./router";
import store from "./store";
import App from "./views/App";
import Components from "./components/components";

window._ = require('lodash');

window.axios = require('axios');

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

Object.keys(Components).forEach(item => {
    Vue.component(item, Components[item]);
});

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app');
