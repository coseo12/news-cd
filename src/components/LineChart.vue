<template>
    <canvas ref="lineChart"></canvas>
</template>

<script>
export default {
	data() {
		return {
			lineChart: null,
		};
	},
	mounted() {
		const ctx = this.$refs.lineChart;
		this.lineChart = new this.ChartJS(ctx, {
			// The type of chart we want to create
			type: 'line',

			// The data for our dataset
			data: {
				labels: [
					'January',
					'February',
					'March',
					'April',
					'May',
					'June',
					'July',
				],
				datasets: [
					{
						label: 'My First dataset',
						backgroundColor: 'rgb(255, 255, 255, 0)',
						borderColor: 'rgb(66, 185, 131, 1)',
						data: [0, 10, 5, 2, 20, 30, 45],
					},
				],
			},

			// Configuration options go here
			options: {},
		});
	},
	beforeUpdate() {
		this.barChart.destroy();
	},
};
</script>