import React from "react";
import { Doughnut } from "react-chartjs-2";

const DoughnutChart = () => {
  let theme = { primary: '#4285f4' }

  const options = {
    maintainAspectRatio: false,
    cutoutPercentage: 0,
    legend: {
      display: false
    }
  };
  const data = {
    "labels": ["Return Customers", "New Customers"],
    "datasets": [{
      "label": "My First Dataset",
      "data": [67432224, 37232128],
      "backgroundColor": [
        theme.primary,
        'gray'
      ]
    }]
  }

  return (
    <Doughnut data={data} options={options} />
  );
};

export default DoughnutChart;
