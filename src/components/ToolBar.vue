<template>
  <div>
    <nav>
      <router-link to="/news">{{$t('message.News')}}</router-link>
      <span>&nbsp;|&nbsp;</span>
      <router-link to="/ask">{{$t('message.Ask')}}</router-link>
      <span>&nbsp;|&nbsp;</span>
      <router-link to="/jobs">{{$t('message.Jobs')}}</router-link>
      <span>&nbsp;|&nbsp;</span>
      <router-link to="/board">{{$t('message.Board')}}</router-link>
      <span>&nbsp;|&nbsp;</span>
      <router-link to="/chart">{{$t('message.Chart')}}</router-link>
      <span>&nbsp;|&nbsp;</span>
      <router-link to="/i18n">{{$t('message.i18n')}}</router-link>
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