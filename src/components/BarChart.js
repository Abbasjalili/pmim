import React from 'react'
import { Bar } from 'react-chartjs-2';
import {Chart as ChartJS, BarElement} from'chart.js/auto';

ChartJS.register(BarElement)

function BarChart({chartData}) {
  return <Bar data= {chartData} />;
}

export default BarChart;

