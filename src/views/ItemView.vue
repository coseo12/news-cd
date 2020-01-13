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
  </div>
</template>

<script>
import UserProfile from '../components/slots/UserProfile.vue';
import { mapActions, mapGetters } from 'vuex';

export default {
	components: {
		UserProfile,
	},
	computed: {
		...mapGetters(['fetchedItem']),
	},
	created() {
		const payload = this.$route.params.id;
		this.FETCH_ITEM(payload);
	},
	methods: {
		...mapActions(['FETCH_ITEM']),
	},
};
</script>

<style scoped>
.title,
.content {
	padding: 0.5rem;
}
</style>