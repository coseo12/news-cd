<template>
  <div>
    <section>
      <user-profile>
        <template slot="userName">
          <router-link v-bind:to="`/user/${fetchedItem.user}`" v-text="fetchedItem.user"></router-link>
        </template>
        <template slot="time">
			{{ fetchedItem.time_ago }}
        </template>
      </user-profile>
    </section>
    <section>
      <h2 class="title" v-text="fetchedItem.title"></h2>
    </section>
    <section>
      <div class="content" v-html="fetchedItem.content"></div>
    </section>
    <span class="modifyContainer" @click="setModify">   
        <font-awesome-icon icon="feather-alt" class="modifyBtn" /> Modify
    </span>
    <span class="modifyContainer" @click="deleted">   
        <font-awesome-icon icon="trash-alt" class="delBtn" /> Delete
    </span>
    <span class="modifyContainer" @click="toList">   
        <font-awesome-icon icon="list" class="toBtn" /> toList
    </span>
  </div>
</template>


<script>
import { mapGetters } from 'vuex';
import UserProfile from './slots/UserProfile.vue';

export default {
	name: 'boardItemView',
	components: {
		UserProfile,
	},
	computed: {
		...mapGetters(['fetchedBoardList']),
	},
	created() {
		const id = Number(this.$route.params.id);
		let items = this.fetchedBoardList;
		for (let item of items) {
			if (id === item.id) {
				this.fetchedItem = item;
			}
		}
	},
	data() {
		return {
			fetchedItem: null,
		};
	},
	methods: {
		setModify() {
			this.$router.push({
				name: 'write',
				params: this.fetchedItem,
			});
		},
		deleted() {
			let items = this.$store.state.boardList;
			const id = Number(this.$route.params.id);
			const func = (acc, cur) => {
				if (Number(cur.id) === id) {
					return acc;
				} else {
					acc.push(cur);
					return acc;
				}
			};
			items = items.reduce(func, []);
			this.$store.commit('SET_BOARD', items);
			this.$router.push('/board');
		},
		toList() {
			this.$router.push('/board');
		},
	},
};
</script>

<style scoped>
.title,
.content {
	padding: 0.5rem;
}
.modifyContainer {
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
</style>