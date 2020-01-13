<template>
  <div>
      <ul class="item-list">
        <li v-for="item in fetchedBoardList" :key="item.id" class="post">
            <div class="points">
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
        <span class="btnContainer" @click="toWrite">   
            <font-awesome-icon icon="feather-alt" class="toBtn" /> Write
        </span>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
	computed: {
		...mapGetters(['fetchedBoardList']),
	},
	methods: {
		toWrite() {
			this.$router.push('/write');
		},
	},
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
</style>