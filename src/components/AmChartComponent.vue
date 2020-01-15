<template>
	<div>
	<div class="hello" ref="chartDiv"></div>
	<div class="hello" ref="chartDivPi"></div>
	</div>
</template>

<script>
import { getXYChart, getPieChart } from '@/api/amChart';

export default {
	name: 'AmChartView',
	data() {
		return {
			xyChart: null,
			pieChart: null,
			xyData: [],
			pieData: [],
		};
	},
	created() {
		let visits = 10;
		for (let i = 1; i < 366; i++) {
			visits += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10);
			this.xyData.push({
				date: new Date(2019, 0, i),
				name: 'name' + i,
				value: visits,
			});
		}
		this.pieData = [
			{
				country: 'Lithuania',
				litres: 501.9,
			},
			{
				country: 'Czech Republic',
				litres: 301.9,
			},
			{
				country: 'Ireland',
				litres: 201.1,
			},
			{
				country: 'Germany',
				litres: 165.8,
			},
			{
				country: 'Australia',
				litres: 139.9,
			},
			{
				country: 'Austria',
				litres: 128.3,
			},
			{
				country: 'UK',
				litres: 99,
			},
			{
				country: 'Belgium',
				litres: 60,
			},
			{
				country: 'The Netherlands',
				litres: 50,
			},
		];
	},
	mounted() {
		this.xyChart = getXYChart(this.$refs.chartDiv, this.xyData);
		this.pieChart = getPieChart(this.$refs.chartDivPi, this.pieData);
	},
	beforeDestroy() {
		if (this.xyChart) {
			this.xyChart.dispose();
		}
		if (this.pieChart) {
			this.pieChart.dispose();
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