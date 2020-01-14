<template>
	<div>
		<div class="barChart">
			<bar-chart></bar-chart>
		</div>
		<div class="lineChart">
			<line-chart></line-chart>
		</div>
	</div>
</template>

<script>
import ListMixin from '../mixins/ListMixin.js';
import BarChart from '../components/BarChart.vue';
import LineChart from '../components/LineChart.vue';

export default {
	name: 'ChartView',
	components: {
		BarChart,
		LineChart,
	},
	mixins: [ListMixin],
};
</script>

<style scoped>
.lineChart {
	width: 400px;
	height: 400px;
}
.barChart {
	width: 400px;
	height: 400px;
}
</style>