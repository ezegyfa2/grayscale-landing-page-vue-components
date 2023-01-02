export default {
	install(Vue) {
		require('text-contents-vue-components').default.install(Vue);
		require('description-vue-components').default.install(Vue);
		require('helper-vue-components').default.install(Vue);

		registerVueComponent('grayscale-contact', require('./Contact/Contact/Component.vue').default, Vue);
		registerVueComponent('grayscale-contact-card', require('./Contact/Card/Component.vue').default, Vue);
		registerVueComponent('grayscale-medium-text-content', require('./MediumTextContent/Component.vue').default, Vue);
		registerVueComponent('grayscale-large-text-content', require('./LargeTextContent/Component.vue').default, Vue);

		registerVueComponent('grayscale-about', require('./About/Component.vue').default, Vue);
		registerVueComponent('grayscale-header', require('./Header/Component.vue').default, Vue);
		registerVueComponent('grayscale-navigation-bar', require('./NavigationBar/CollapsableNavigationBar/Component.vue').default, Vue);
		registerVueComponent('grayscale-navigation-link', require('./NavigationBar/NavigationLink/Component.vue').default, Vue);
		registerVueComponent('grayscale-signup', require('./Signup/Component.vue').default, Vue);

		registerVueComponent('grayscale-landing-page', require('./LandingPage/Component.vue').default, Vue);
	}
};