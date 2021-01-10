import React from "react";
import { Doughnut } from "react-chartjs-2";

const PieChart = props => {
  const defaultTheme = { color: { primaryColor: '#4285f4' } };
  const theme =  Object.assign( defaultTheme, props.theme);
  const options = {
    maintainAspectRatio: false,
    cutoutPercentage: 0,
    legend: {
      display: false
    }
  };
  const data = {
    "labels": ["Return Visitor", "New Visitor"],
    "datasets": [{
      "label": "My First Dataset",
      "data": [67432224, 37232128],
      "backgroundColor": [
        theme.color.primaryColor,
        '#e3eaef'
      ]
    }]
  }

  return (
    <Doughnut data={data} options={options} />
  );
};

export default PieChart;
