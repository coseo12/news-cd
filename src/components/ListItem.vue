<template>
  <div>
      <ul class="item-list">
        <li v-for="item in fetchedList" :key="item.id" class="post">
            <div class="points">
                {{ item.points || 0}}
            </div>
            <div>
                <template v-if="$route.name !== 'ask'">
                    <p class="item-title">
                        <a v-bind:href="item.url">{{ item.title }}</a>
                    </p>
                </template>
                <template v-else>
                    <p class="item-title">
                        <router-link v-bind:to="`/item/${item.id}`">{{ item.title }}</router-link>
                    </p>
                </template>
                <small class="link-text"> 
                    {{ item.time_ago }} by
                    <template v-if="item.user">
                        <router-link class="link-text" v-bind:to="`/user/${item.user}`">{{ item.user }}</router-link>
                    </template>
                    <template v-else>
                    <a v-bind:href="item.url">{{ item.domain }}</a>
                    </template>
                </small>
            </div>
        </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
	computed: {
		...mapGetters(['fetchedList']),
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
</style>