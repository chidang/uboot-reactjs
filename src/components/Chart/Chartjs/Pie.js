import React from "react";
import { Pie } from "react-chartjs-2";
import { Card } from 'react-bootstrap';

const PieChart = props => {
  const defaultTheme = { color: { primary: '#4285f4', success: '#7cb342', warning: '#f9b42a' } };
  const theme =  Object.assign( defaultTheme, props.theme);
  const data = {
    labels: ["Social", "Search Engines", "Direct", "Other"],
    datasets: [
      {
        data: [260, 125, 54, 146],
        backgroundColor: [
          theme.color.primary,
          theme.color.warning,
          theme.color.danger,
          "#E8EAED"
        ],
        borderColor: "transparent"
      }
    ]
  };

  const options = {
    maintainAspectRatio: false,
    legend: {
      display: false
    }
  };

  return (
    <Card className="w-100">
      <Card.Header>
        <Card.Title tag="h5">Pie Chart</Card.Title>
      </Card.Header>
      <Card.Body>
        <div className="chart chart-sm">
          <Pie data={data} options={options} />
        </div>
      </Card.Body>
    </Card>
  );
};

export default PieChart;
