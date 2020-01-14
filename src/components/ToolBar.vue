<template>
  <div>
    <nav>
      <router-link to="/news">News</router-link>
      <span>&nbsp;|&nbsp;</span>
      <router-link to="/ask">Ask</router-link>
      <span>&nbsp;|&nbsp;</span>
      <router-link to="/jobs">Jobs</router-link>
      <span>&nbsp;|&nbsp;</span>
      <router-link to="/board">Board</router-link>
      <span>&nbsp;|&nbsp;</span>
      <router-link to="/chart">Chart</router-link>
      <span>&nbsp;|&nbsp;</span>
      <router-link to="/i18n">i18n</router-link>
      <span v-if="testing">&nbsp;|&nbsp;</span>
      <router-link v-if="testing" to="/testing">Testing</router-link>
    </nav>
  </div>
</template>

<script>
export default {
	data() {
		return {
			testing: false,
		};
	},
};
</script>

<style scoped>
nav {
	color: white;
	background-color: #42b883;
	display: flex;
	padding: 1rem;
}
nav .router-link-exact-active {
	color: #35495e;
}
nav a {
	color: white;
}
</style>