import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Card } from 'react-bootstrap';

const DoughnutChart = props => {
  const defaultTheme = { color: { primary: '#4285f4', success: '#7cb342', warning: '#f9b42a' } };
  const theme =  Object.assign( defaultTheme, props.theme);
  const data = {
    labels: ["Social", "Search Engines", "Direct", "Other"],
    datasets: [
      {
        data: [245, 543, 456, 456],
        backgroundColor: [
          theme.color.primary,
          theme.color.success,
          theme.color.warning,
          "#E8EAED"
        ],
        borderColor: "transparent"
      }
    ]
  };

  const options = {
    maintainAspectRatio: false,
    cutoutPercentage: 65,
    legend: {
      display: false
    }
  };

  return (
    <Card className="w-100">
      <Card.Header>
        <Card.Title tag="h5">Doughnut Chart</Card.Title>
      </Card.Header>
      <Card.Body>
        <div className="chart chart-sm">
          <Doughnut data={data} options={options} />
        </div>
      </Card.Body>
    </Card>
  );
};

export default DoughnutChart;
