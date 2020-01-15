<template>
  <div class="hello" ref="chartDiv"></div>
</template>

<script>
import { getXYChart } from '../api/amChart';

export default {
	name: 'AmChartView',
	data() {
		return {
			chart: null,
		};
	},
	mounted() {
		this.chart = getXYChart(this.$refs.chartDiv);
	},
	beforeDestroy() {
		if (this.chart) {
			this.chart.dispose();
		}
	},
};
</script>

<style scoped>
.hello {
	width: 100%;
	height: 500px;
}
</style>