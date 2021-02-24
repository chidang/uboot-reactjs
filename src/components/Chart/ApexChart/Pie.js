import React from "react";
import Chart from "react-apexcharts";
import { Card } from 'react-bootstrap';

const PieChart = props => {
  const defaultTheme = { color: { primary: '#4285f4', success: '#7cb342', warning: '#f9b42a', danger: '#dc3545', info: '#17a2b8' } };
  const theme =  Object.assign( defaultTheme, props.theme);
  const data = [44, 55, 13, 33];

  const options = {
    dataLabels: {
      enabled: false
    },
    colors: [
      theme.color.primary,
      theme.color.success,
      theme.color.warning,
      theme.color.danger,
      theme.color.info
    ]
  };

  return (
    <Card className="w-100">
      <Card.Header>
        <Card.Title tag="h5">Pie Chart</Card.Title>
      </Card.Header>
      <Card.Body>
        <div className="chart">
          <Chart options={options} series={data} type="donut" height="350" />
        </div>
      </Card.Body>
    </Card>
  );
};

export default PieChart;
