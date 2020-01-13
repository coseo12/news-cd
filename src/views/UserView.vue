<template>
  <div>
	<user-profile>
		<template slot="userName">
			<div v-text="fetchedUser.id"></div>
		</template>
		<template slot="time">
			<span>{{ 'Joined ' + fetchedUser.created }}</span>
		</template>
		<template slot="karma">
			<span>, {{ fetchedUser.karma }}</span>
		</template>
	</user-profile>
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
		...mapGetters(['fetchedUser']),
	},
	created() {
		const userName = this.$route.params.id;
		this.FETCH_USER(userName);
	},
	methods: {
		...mapActions(['FETCH_USER']),
	},
};
</script>

<style>
</style>