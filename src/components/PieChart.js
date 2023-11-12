import React from 'react'
import { Pie } from 'react-chartjs-2';
import {Chart as ChartJS, BarElement} from'chart.js/auto';

ChartJS.register(BarElement)

function PieChart({chartData}) {
  return <Pie data= {chartData} />;
}

export default PieChart;