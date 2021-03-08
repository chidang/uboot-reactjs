import React from "react";
import Chart from "react-apexcharts";
import { Card } from 'react-bootstrap';

const ColumnChart = props => {
  const defaultTheme = { color: { primary: '#4285f4', success: '#7cb342', warning: '#f9b42a', danger: '#dc3545', info: '#17a2b8' } };
  const theme =  Object.assign( defaultTheme, props.theme);
  const data = [
    {
      name: "Net Profit",
      data: [45, 57, 58, 54, 66, 62, 67, 70, 77]
    },
    {
      name: "Revenue",
      data: [78, 88, 120, 100, 87, 109, 99, 127, 100]
    },
    {
      name: "Free Cash Flow",
      data: [45, 54, 39, 36, 48, 50, 59, 52, 48]
    }
  ];

  const options = {
    plotOptions: {
      bar: {
        horizontal: false,
        endingShape: "rounded",
        columnWidth: "55%"
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"]
    },
    xaxis: {
      categories: [
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct"
      ]
    },
    yaxis: {
      title: {
        text: "$ (thousands)"
      }
    },
    fill: {
      opacity: 1
    },
    tooltip: {
      y: {
        formatter: function(val) {
          return "$ " + val + " thousands";
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
        <Card.Title tag="h5">Column Chart</Card.Title>
      </Card.Header>
      <Card.Body>
        <div className="chart">
          <Chart options={options} series={data} type="bar" height="350" />
        </div>
      </Card.Body>
    </Card>
  );
};

export default ColumnChart;
