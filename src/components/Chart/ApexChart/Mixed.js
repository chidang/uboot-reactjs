import React from "react";
import Chart from "react-apexcharts";
import { Card } from 'react-bootstrap';

const MixedChart = props => {
  const defaultTheme = { color: { primary: '#4285f4', success: '#7cb342', warning: '#f9b42a', danger: '#dc3545', info: '#17a2b8' } };
  const theme =  Object.assign( defaultTheme, props.theme);
  const data = [
    {
      name: "Item 1",
      type: "column",
      data: [24, 12, 34, 38, 18, 29, 40, 28, 49, 30, 38]
    },
    {
      name: "Item 2",
      type: "area",
      data: [45, 58, 48, 69, 25, 55, 30, 43, 59, 29, 50]
    },
    {
      name: "Item 3",
      type: "line",
      data: [35, 27, 39, 33, 49, 46, 72, 61, 60, 44, 48]
    }
  ];

  const options = {
    chart: {
      stacked: false
    },
    stroke: {
      width: [0, 2, 5],
      curve: "smooth"
    },
    plotOptions: {
      bar: {
        columnWidth: "50%"
      }
    },
    fill: {
      opacity: [0.85, 0.25, 1],
      gradient: {
        inverseColors: false,
        shade: "light",
        type: "vertical",
        opacityFrom: 0.85,
        opacityTo: 0.55,
        stops: [0, 100, 100, 100]
      }
    },
    labels: [
      "01/01/2020",
      "02/01/2020",
      "03/01/2020",
      "04/01/2020",
      "05/01/2020",
      "06/01/2020",
      "07/01/2020",
      "08/01/2020",
      "09/01/2020",
      "10/01/2020",
      "11/01/2020"
    ],
    markers: {
      size: 0
    },
    xaxis: {
      type: "datetime"
    },
    yaxis: {
      title: {
        text: "Points"
      },
      min: 0
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: function(y) {
          if (typeof y !== "undefined") {
            return y.toFixed(0) + " points";
          }
          return y;
        }
      }
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
        <Card.Title tag="h5">Mixed Chart</Card.Title>
      </Card.Header>
      <Card.Body>
        <div className="chart">
          <Chart options={options} series={data} type="line" height="350" />
        </div>
      </Card.Body>
    </Card>
  );
};

export default MixedChart;
