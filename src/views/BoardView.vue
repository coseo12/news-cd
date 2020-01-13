<template>
  <div>
      <board-list></board-list>
      <!-- board -->
  </div>
</template>

<script>
import BoardList from '../components/BoardList.vue';

export default {
	components: {
		BoardList,
	},
};
</script>

<style scoped>
.addContainer {
	padding: 1rem;
}
.addBtn {
	color: #42b883;
	vertical-align: middle;
}
</style>