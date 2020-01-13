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
		let boardList = [
			{
				id: 1,
				title: 'title1',
				user: 'user1',
				time_ago: '2020.01.13',
				content: 'content1',
			},
			{
				id: 2,
				title: 'title2',
				user: 'user2',
				time_ago: '2020.01.13',
				content: 'content2',
			},
			{
				id: 3,
				title: 'title3',
				user: 'user3',
				time_ago: '2020.01.13',
				content: 'content3',
			},
			{
				id: 4,
				title: 'title4',
				user: 'user4',
				time_ago: '2020.01.13',
				content: 'content4',
			},
			{
				id: 5,
				title: 'title5',
				user: 'user5',
				time_ago: '2020.01.13',
				content: 'content5',
			},
			{
				id: 6,
				title: 'title6',
				user: 'user6',
				time_ago: '2020.01.13',
				content: 'content6',
			},
			{
				id: 7,
				title: 'title7',
				user: 'user7',
				time_ago: '2020.01.13',
				content: 'content7',
			},
			{
				id: 8,
				title: 'title8',
				user: 'user8',
				time_ago: '2020.01.13',
				content: 'content8',
			},
			{
				id: 9,
				title: 'title9',
				user: 'user9',
				time_ago: '2020.01.13',
				content: 'content9',
			},
			{
				id: 10,
				title: 'title10',
				user: 'user10',
				time_ago: '2020.01.13',
				content: 'content10',
			},
			{
				id: 11,
				title: 'title11',
				user: 'user11',
				time_ago: '2020.01.13',
				content: 'content11',
			},
			{
				id: 12,
				title: 'title12',
				user: 'user12',
				time_ago: '2020.01.13',
				content: 'content12',
			},
			{
				id: 13,
				title: 'title13',
				user: 'user13',
				time_ago: '2020.01.13',
				content: 'content13',
			},
			{
				id: 14,
				title: 'title14',
				user: 'user14',
				time_ago: '2020.01.13',
				content: 'content14',
			},
			{
				id: 15,
				title: 'title15',
				user: 'user15',
				time_ago: '2020.01.13',
				content: 'content15',
			},
		];
		this.$store.commit('SET_BOARD', boardList);
		this.$store.commit('SET_PAGING_DEFAULT');
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
