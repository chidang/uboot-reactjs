import React from "react";
import { Polar } from "react-chartjs-2";
import { Card } from 'react-bootstrap';

const PolarChart = props => {
  const defaultTheme = { color: { primary: '#4285f4', success: '#7cb342', warning: '#f9b42a', danger: '#dc3545' } };
  const theme =  Object.assign( defaultTheme, props.theme);
  const data = {
    labels: ["Reliability", "Comfort", "Safety", "Speed", "Efficiency"],
    datasets: [
      {
        label: "Model S",
        data: [34, 43, 54, 53, 76],
        backgroundColor: [
          theme.color.primary,
          theme.color.success,
          theme.color.danger,
          theme.color.warning,
          "#5b7dff"
        ]
      }
    ]
  };

  const options = { maintainAspectRatio: false };

  return (
    <Card className="w-100">
      <Card.Header>
        <Card.Title tag="h5">Polar Area Chart</Card.Title>
      </Card.Header>
      <Card.Body>
        <div className="chart chart-sm">
          <Polar data={data} options={options} />
        </div>
      </Card.Body>
    </Card>
  );
};

export default PolarChart;
