<template>
  <div>
	<div class="board">
		<ul class="item-list">
			<li v-for="item in fetchedBoardList" :key="item.id" class="post">
				<div class="points">
					<font-awesome-icon icon="feather-alt" class="toBtn" />
				</div>
				<div>
					<template>
						<p class="item-title">
							<router-link v-bind:to="`/board/${item.id}`">{{ item.title }}</router-link>
						</p>
					</template>
					<small class="link-text"> 
						{{ item.time_ago }} by {{ item.user }}
					</small>
				</div>
			</li>
		</ul>
	</div>
	<div class="wrap">
			<span class="paginationBox">
				<nav aria-label="Page navigation">
					<ul class="pagination">
						<li class="page-item"><a class="page-link" href="#" @click="setPreNext('P')">{{ $t('message.Previous') }}</a></li>
						<li class="page-item" :class="{ setPage: $store.state.nowPage === item }" v-for="item in this.$store.state.totalPage" :key="item">
							<a class="page-link" href="#" @click="setNowPage(item)">{{ item }}</a>
						</li>
						<li class="page-item"><a class="page-link" href="#" @click="setPreNext('N')">{{ $t('message.Next') }}</a></li>
					</ul>
				</nav>	
			</span>
			<span class="btnContainer" @click="toWrite">   
				<font-awesome-icon icon="feather-alt" class="toBtn" /> {{ $t('message.Write') }}
			</span>
		</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import ListMixin from '../mixins/ListMixin.js';

export default {
	data() {
		return {
			totalItems: this.$store.state.totalItems,
		};
	},
	computed: {
		...mapGetters(['fetchedBoardList']),
	},
	created() {
		this.$store.commit('SET_PAGING_DEFAULT');
	},
	methods: {
		toWrite() {
			this.$router.push('/write');
		},
		setNowPage(item) {
			this.$store.commit('SET_NOWPAGE', item);
		},
		setPreNext(item) {
			let nowPage = this.$store.state.nowPage;
			const totalPage = this.$store.state.totalPage;

			if (item === 'P') {
				if (nowPage > 1) {
					this.$store.commit('SET_NOWPAGE', nowPage - 1);
				} else {
					alert('First page!');
				}
			} else {
				if (nowPage < totalPage) {
					this.$store.commit('SET_NOWPAGE', nowPage + 1);
				} else {
					alert('Last page!');
				}
			}
		},
	},
	mixins: [ListMixin],
};
</script>

<style scoped>
.item-list {
	padding: 0;
	margin: 0;
}
.post {
	list-style: none;
	display: flex;
	align-items: center;
	border-bottom: 1px solid #eee;
}
.points {
	width: 80px;
	height: 60px;
	display: flex;
	align-items: center;
	justify-content: center;
	color: #41b883;
}
.item-title {
	margin: 0;
}
.link-text {
	color: #828282;
}
.btnContainer {
	float: left;
	background: linear-gradient(to right, #42b983, #42b983);
	display: block;
	width: auto;
	margin: 0.5rem;
	padding: 0.5rem;
	border-top-left-radius: 5px;
	border-bottom-left-radius: 5px;
	border-top-right-radius: 5px;
	border-bottom-right-radius: 5px;
	cursor: pointer;
}
.paginationBox {
	float: left;
	margin: 0.5rem;
}
.wrap {
	padding: 0.5rem;
}
.setPage a {
	background: lightblue;
}
.board {
	height: 600px;
}
</style>