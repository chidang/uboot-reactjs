import React from "react";
import { Radar } from "react-chartjs-2";
import { Card } from 'react-bootstrap';

const RadarChart = props => {
  const defaultTheme = { color: { primary: '#4285f4', success: '#7cb342', warning: '#f9b42a', danger: '#dc3545' } };
  const theme =  Object.assign( defaultTheme, props.theme);
  const data = {
    labels: ["Reliability", "Comfort", "Safety", "Speed", "Efficiency"],
    datasets: [
      {
        label: "Model A",
        backgroundColor: "rgba(0, 123, 255, 0.2)",
        borderColor: theme.color.primary,
        pointBackgroundColor: theme.color.primary,
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: theme.color.primary,
        data: [88, 65, 98, 65, 41]
      },
      {
        label: "Model B",
        backgroundColor: "rgba(220, 53, 69, 0.2)",
        borderColor: theme.color.danger,
        pointBackgroundColor: theme.color.danger,
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: theme.color.danger,
        data: [40, 45, 66, 90, 87]
      }
    ]
  };

  const options = { maintainAspectRatio: false };

  return (
    <Card className="w-100">
      <Card.Header>
        <Card.Title tag="h5">Radar Chart</Card.Title>
      </Card.Header>
      <Card.Body>
        <div className="chart chart-sm">
          <Radar data={data} options={options} />
        </div>
      </Card.Body>
    </Card>
  );
};

export default RadarChart;
