import React from "react";
import Chart from "react-apexcharts";
import { Card } from 'react-bootstrap';

const AreaChart = props => {
  const defaultTheme = { color: { primary: '#4285f4', success: '#7cb342', warning: '#f9b42a', danger: '#dc3545', info: '#17a2b8' } };
  const theme =  Object.assign( defaultTheme, props.theme);
  const data = [
    {
      name: "series1",
      data: [44, 45, 35, 62, 55, 88, 99]
    },
    {
      name: "series2",
      data: [20, 41, 47, 33, 42, 11, 45]
    }
  ];

  const options = {
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: "smooth"
    },
    xaxis: {
      type: "datetime",
      categories: [
        "2020-10-20T00:00:00",
        "2020-10-20T01:30:00",
        "2020-10-20T02:30:00",
        "2020-10-20T03:30:00",
        "2020-10-20T04:30:00",
        "2020-10-20T05:30:00",
        "2020-10-20T06:30:00"
      ]
    },
    tooltip: {
      x: {
        format: "dd/MM/yy HH:mm"
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
        <Card.Title tag="h5">Area Chart</Card.Title>
      </Card.Header>
      <Card.Body>
        <div className="chart w-100">
          <Chart options={options} series={data} type="area" height="350" />
        </div>
      </Card.Body>
    </Card>
  );
};

export default AreaChart;
