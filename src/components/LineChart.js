import React from 'react'
import { Line } from 'react-chartjs-2';
import {Chart as ChartJS, BarElement} from'chart.js/auto';

ChartJS.register(BarElement)

function LineChart({chartData}) {
  return <Line data= {chartData} />;
}

export default LineChart;