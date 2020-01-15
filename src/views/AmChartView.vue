<template>
  <div>
    <am-chart-component></am-chart-component>
  </div>
</template>

<script>
import AmChartComponent from '../components/AmChartComponent';

export default {
	name: 'AmChartView',
	components: {
		AmChartComponent,
	},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
	width: 100%;
	height: 500px;
}
</style>