import React from "react";
import Chart from "react-apexcharts";
import { Card } from 'react-bootstrap';

const LineChart = props => {
  const defaultTheme = { color: { primary: '#4285f4', success: '#7cb342', warning: '#f9b42a', danger: '#dc3545', info: '#17a2b8' } };
  const theme =  Object.assign( defaultTheme, props.theme);
  const data = [
    {
      name: "Session Duration",
      data: [46, 56, 40, 28, 35, 56, 32, 25, 7, 5, 18, 15]
    },
    {
      name: "Page Views",
      data: [38, 44, 65, 46, 21, 20, 43, 21, 11, 77, 65, 56]
    },
    {
      name: "Total Visits",
      data: [100, 88, 77, 120, 55, 40, 72, 50, 88, 65, 77, 67]
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
      style: "full"
    },
    xaxis: {
      categories: [
        "01 Jun",
        "02 Jun",
        "03 Jun",
        "04 Jun",
        "05 Jun",
        "06 Jun",
        "07 Jun",
        "08 Jun",
        "09 Jun",
        "10 Jun",
        "11 Jun",
        "12 Jun"
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
