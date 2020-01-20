<template>
  <div id="app">
    <tool-bar></tool-bar>
	<transition name="page">
		<router-view></router-view>
	</transition>
	<spinner v-bind:loading="loadingStatus"></spinner>
  </div>
</template>

<script>
import ToolBar from './components/ToolBar.vue';
import Spinner from './components/Spinner.vue';
import bus from './utils/bus.js';

export default {
	name: 'app',
	components: {
		ToolBar,
		Spinner,
	},
	data() {
		return {
			loadingStatus: false,
		};
	},
	created() {
		bus.$on('start:spinner', this.startSpinner);
		bus.$on('end:spinner', this.endSpinner);
	},
	beforeDestroy() {
		bus.$off('start:spinner', this.startSpinner);
		bus.$off('end:spinner', this.endSpinner);
	},
	methods: {
		startSpinner() {
			this.loadingStatus = true;
		},
		endSpinner() {
			this.loadingStatus = false;
		},
	},
};
</script>

<style>
body {
	all: unset;
}

a {
	text-decoration: none;
}
a.router-link-exact-active {
	text-decoration: underline;
}
a:hover {
	color: #42b883;
	text-decoration: underline;
}
/* Router Transition */
.page-enter-active {
	transition: all 2s ease;
}
.page-leave-active {
	transition: all 0s cubic-bezier(1, 0.5, 0.8, 1);
}
.page-enter, .page-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
	transform: translateY(10px);
	opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
	opacity: 0;
}
</style>
