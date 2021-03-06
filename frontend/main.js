import Vue from "vue";
import router from "./router";
import store from "./store";
import i18n from "./i18n";
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
    i18n,
    render: h => h(App),
}).$mount('#app');
