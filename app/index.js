import 'whatwg-fetch';

import Vue from 'vue';
import App from './components/application.vue';

const app = new Vue(App);

app.$mount('.app');
