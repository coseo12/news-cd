<template>
  <div>
      <form method="POST" action="">
        <div>
            Title : <input type="text" name="title" v-model="title">
        </div>
        <div>
            User : <input type="text" name="title" v-model="user">
        </div>
        <div>
            Content : <input type="text" name="title" v-model="content">
        </div>
        
        <span v-if="!flag" class="addContainer" @click="addList">   
            <font-awesome-icon icon="feather-alt" class="addBtn" /> Submit
        </span>
        <span v-else class="addContainer" @click="modifyList">   
            <font-awesome-icon icon="feather-alt" class="addBtn" /> Modify
        </span>
        <span class="addContainer" @click="toList">   
            <font-awesome-icon icon="list" class="toBtn" /> ToList
        </span>
      </form>
  </div>
</template>

<script>
export default {
	data() {
		return {
			id: '',
			title: '',
			user: '',
			content: '',
			flag: false,
			param: {},
		};
	},
	created() {
		if (this.$route.params.id) {
			this.param = this.$route.params;
			this.title = this.$route.params.title;
			this.user = this.$route.params.user;
			this.content = this.$route.params.content;
			this.id = this.$route.params.id;
			this.flag = true;
		} else {
			this.flag = false;
		}
	},
	methods: {
		addList() {
			// let items = this.$store.state.boardList;
			let item = {
				// id: new Date().getTime(),
				title: this.title,
				user: this.user,
				content: this.content,
				// time_ago: this.getTime(),
			};
			// items.unshift(item);
			// this.$store.commit('SET_BOARD', items);
			this.$store.dispatch('ADD_BOARD_ITEM', item);
			this.$router.push('/board');
		},
		modifyList() {
			// let items = this.$store.state.boardList;
			let item = {
				id: this.id,
				title: this.title,
				user: this.user,
				// time_ago: this.getTime(),
				content: this.content,
			};
			// let func = (acc, cur) => {
			// 	if (Number(this.id) === Number(cur.id)) {
			// 		acc.push(item);
			// 		return acc;
			// 	} else {
			// 		acc.push(cur);
			// 		return acc;
			// 	}
			// };
			// items = items.reduce(func, []);

			// this.$store.commit('SET_BOARD', items);
			this.$store.dispatch('PUT_BOARD_ITEM', item);
			this.$router.push('/board');
		},
		toList() {
			this.$router.push('/board');
		},
		getTime() {
			let date = new Date();
			let time = `${date.getFullYear()}.${date.getMonth() +
				1}.${date.getDate()}`;
			return time;
		},
	},
};
</script>

<style scoped>
.addContainer {
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