import Chart from 'chart.js'

export default {
  install(Vue) {
    Vue.prototype.ChartJS = Chart;
  }
}