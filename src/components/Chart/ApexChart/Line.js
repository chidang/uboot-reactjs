import React from "react";
import Chart from "react-apexcharts";
import { Card } from 'react-bootstrap';

const LineChart = props => {
  const defaultTheme = { color: { primary: '#4285f4', success: '#7cb342', warning: '#f9b42a', danger: '#dc3545', info: '#17a2b8' } };
  const theme =  Object.assign( defaultTheme, props.theme);
  const data = [
    {
      name: "Session Duration",
      data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10]
    },
    {
      name: "Page Views",
      data: [35, 41, 62, 42, 13, 18, 29, 37, 36, 51, 32, 35]
    },
    {
      name: "Total Visits",
      data: [87, 57, 74, 99, 75, 38, 62, 47, 82, 56, 45, 47]
    }
  ];

  const options = {
    chart: {
      zoom: {
        enabled: false
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      width: [5, 7, 5],
      curve: "straight",
      dashArray: [0, 8, 5]
    },
    markers: {
      size: 0,
      style: "hollow" // full, hollow, inverted
    },
    xaxis: {
      categories: [
        "01 Jan",
        "02 Jan",
        "03 Jan",
        "04 Jan",
        "05 Jan",
        "06 Jan",
        "07 Jan",
        "08 Jan",
        "09 Jan",
        "10 Jan",
        "11 Jan",
        "12 Jan"
      ]
    },
    tooltip: {
      y: [
        {
          title: {
            formatter: function(val) {
              return val + " (mins)";
            }
          }
        },
        {
          title: {
            formatter: function(val) {
              return val + " per session";
            }
          }
        },
        {
          title: {
            formatter: function(val) {
              return val;
            }
          }
        }
      ]
    },
    grid: {
      borderColor: "#f1f1f1"
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
        <Card.Title tag="h5">Line Chart</Card.Title>
      </Card.Header>
      <Card.Body>
        <div className="chart">
          <Chart options={options} series={data} type="line" height="350" />
        </div>
      </Card.Body>
    </Card>
  );
};

export default LineChart;
