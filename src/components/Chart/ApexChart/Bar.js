import React from "react";
import Chart from "react-apexcharts";
import { Card } from 'react-bootstrap';

const BarChart = props => {
  const defaultTheme = { color: { primary: '#4285f4', success: '#7cb342', warning: '#f9b42a', danger: '#dc3545', info: '#17a2b8' } };
  const theme =  Object.assign( defaultTheme, props.theme);
  const data = [
    {
      name: "Direct",
      data: [45, 54, 44, 34, 28, 47, 34]
    },
    {
      name: "Affilliate",
      data: [33, 44, 35, 56, 17, 46, 38]
    },
    {
      name: "Sponsored",
      data: [14, 18, 15, 12, 19, 21, 28]
    },
    {
      name: "Emails",
      data: [7, 12, 25, 9, 11, 12, 15]
    },
    {
      name: "Other",
      data: [26, 21, 18, 34, 27, 28, 17]
    }
  ];

  const options = {
    chart: {
      stacked: true
    },
    plotOptions: {
      bar: {
        horizontal: true
      }
    },
    stroke: {
      width: 1,
      colors: ["#fff"]
    },
    xaxis: {
      categories: [2008, 2009, 2010, 2011, 2012, 2013, 2014],
      labels: {
        formatter: function(val) {
          return val + "K";
        }
      }
    },
    yaxis: {
      title: {
        text: undefined
      }
    },
    tooltip: {
      y: {
        formatter: function(val) {
          return val + "K";
        }
      }
    },
    fill: {
      opacity: 1
    },
    legend: {
      position: "top",
      horizontalAlign: "left",
      offsetX: 40
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
        <Card.Title tag="h5">Bar Chart</Card.Title>
      </Card.Header>
      <Card.Body>
        <div className="chart">
          <Chart options={options} series={data} type="bar" height="350" />
        </div>
      </Card.Body>
    </Card>
  );
};

export default BarChart;
