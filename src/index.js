export default {
	install(Vue) {
		require('text-contents-vue-components').default.install(Vue);
		require('description-vue-components').default.install(Vue);
		require('helper-vue-components').default.install(Vue);

		Vue.component('grayscale-contact', require('./Contact/Contact/Component.vue').default);
		Vue.component('grayscale-contact-card', require('./Contact/Card/Component.vue').default);
		Vue.component('grayscale-medium-text-content', require('./MediumTextContent/Component.vue').default);
		Vue.component('grayscale-large-text-content', require('./LargeTextContent/Component.vue').default);

		Vue.component('grayscale-about', require('./About/Component.vue').default);
		Vue.component('grayscale-header', require('./Header/Component.vue').default);
		Vue.component('grayscale-navigation-bar', require('./NavigationBar/CollapsableNavigationBar/Component.vue').default);
		Vue.component('grayscale-navigation-link', require('./NavigationBar/NavigationLink/Component.vue').default);
		Vue.component('grayscale-signup', require('./Signup/Component.vue').default);

		Vue.component('grayscale-landing-page', require('./LandingPage/Component.vue').default);
	}
};