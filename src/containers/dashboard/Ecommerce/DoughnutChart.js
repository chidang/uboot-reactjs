import React from "react";
import { Doughnut } from "react-chartjs-2";

const DoughnutChart = () => {
  let theme = { primary: '#4285f4' }
  const data = {
    "labels": ["Direct", "Affilliate", "Sponsored", "Email"],
    "datasets": [{
      "label": "My First Dataset",
      "data": [300, 50, 100, 30],
      "backgroundColor": [
        'red',
        'blue',
       'green',
       'yellow'
      ]
    }]
  }

  return (
    <Doughnut data={data} />
  );
};

export default DoughnutChart;
