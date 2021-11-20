export default {
	install(Vue) {
		require('text-contents-vue-components').default.install(Vue);
		require('grayscale-vue-components').default.install(Vue);
		require('description-vue-components').default.install(Vue);
		require('helper-vue-components').default.install(Vue);
	}
};