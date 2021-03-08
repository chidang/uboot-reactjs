import React from "react";
import Chart from "react-apexcharts";
import { Card } from 'react-bootstrap';

const CandlestickChart = props => {
  const defaultTheme = { color: { primary: '#4285f4', success: '#7cb342', warning: '#f9b42a', danger: '#dc3545', info: '#17a2b8' } };
  const theme =  Object.assign( defaultTheme, props.theme);
  const data = [
    {
      data: [
        {
          x: new Date(2019, 1, 1),
          y: [61.98, 66.29, 61.69, 63.86]
        },
        {
          x: new Date(2019, 2, 1),
          y: [63.66, 64.99, 61.36, 62.96]
        },
        {
          x: new Date(2019, 3, 1),
          y: [62.96, 63.78, 61.64, 62.48]
        },
        {
          x: new Date(2019, 4, 1),
          y: [62.64, 62.79, 47.88, 49.24]
        },
        {
          x: new Date(2019, 5, 1),
          y: [49.1, 62.86, 47.7, 62.78]
        },
        {
          x: new Date(2019, 6, 1),
          y: [62.83, 63.48, 60.32, 62.29]
        },
        {
          x: new Date(2019, 7, 1),
          y: [62.2, 64.48, 61.64, 62.68]
        },
        {
          x: new Date(2019, 8, 1),
          y: [62.76, 67.36, 62.16, 67.03]
        },
        {
          x: new Date(2019, 9, 1),
          y: [67.04, 68.16, 48.88, 66.19]
        },
        {
          x: new Date(2019, 10, 1),
          y: [66.09, 68.86, 66.48, 68.79]
        },
        {
          x: new Date(2019, 11, 1),
          y: [68.78, 69.66, 68.23, 69.06]
        },
        {
          x: new Date(2020, 0, 1),
          y: [69.37, 61.11, 69.36, 60.34]
        },
        {
          x: new Date(2020, 1, 1),
          y: [60.4, 60.62, 66.71, 66.93]
        },
        {
          x: new Date(2020, 2, 1),
          y: [67.02, 69.71, 66.04, 66.82]
        },
        {
          x: new Date(2020, 3, 1),
          y: [66.97, 69.62, 64.77, 69.3]
        },
        {
          x: new Date(2020, 4, 1),
          y: [69.11, 62.29, 69.1, 69.86]
        },
        {
          x: new Date(2020, 6, 1),
          y: [69.97, 60.11, 66.66, 68.42]
        },
        {
          x: new Date(2020, 6, 1),
          y: [68.34, 60.93, 66.76, 67.42]
        },
        {
          x: new Date(2020, 7, 1),
          y: [67.76, 68.08, 61.18, 64.71]
        },
        {
          x: new Date(2020, 8, 1),
          y: [64.8, 61.42, 63.18, 67.36]
        },
        {
          x: new Date(2020, 9, 1),
          y: [67.66, 63.09, 67.0, 62.99]
        },
        {
          x: new Date(2020, 10, 1),
          y: [62.89, 63.42, 69.72, 61.76]
        },
        {
          x: new Date(2020, 11, 1),
          y: [61.71, 64.16, 61.29, 63.04]
        }
      ]
    }
  ];

  const options = {
    stroke: {
      width: 1
    },
    xaxis: {
      type: "datetime"
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
        <Card.Title tag="h5">Candlestick Chart</Card.Title>
      </Card.Header>
      <Card.Body>
        <div className="chart">
          <Chart
            options={options}
            series={data}
            type="candlestick"
            height="350"
          />
        </div>
      </Card.Body>
    </Card>
  );
};

export default CandlestickChart;
