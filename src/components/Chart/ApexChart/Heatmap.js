import React from "react";
import Chart from "react-apexcharts";
import { Card } from 'react-bootstrap';

const HeatmapChart = props => {
  const defaultTheme = { color: { primary: '#4285f4', success: '#7cb342', warning: '#f9b42a', danger: '#dc3545', info: '#17a2b8' } };
  const theme =  Object.assign( defaultTheme, props.theme);
  const generateData = (count, yrange) => {
    var i = 0;
    var series = [];
    while (i < count) {
      var x = (i + 1).toString();
      var y =
        Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
      series.push({
        x: x,
        y: y
      });
      i++;
    }
    return series;
  };

  const data = [
    {
      name: "Metric1",
      data: generateData(20, {
        min: 0,
        max: 90
      })
    },
    {
      name: "Metric2",
      data: generateData(20, {
        min: 0,
        max: 90
      })
    },
    {
      name: "Metric3",
      data: generateData(20, {
        min: 0,
        max: 90
      })
    },
    {
      name: "Metric4",
      data: generateData(20, {
        min: 0,
        max: 90
      })
    },
    {
      name: "Metric5",
      data: generateData(20, {
        min: 0,
        max: 90
      })
    },
    {
      name: "Metric6",
      data: generateData(20, {
        min: 0,
        max: 90
      })
    },
    {
      name: "Metric7",
      data: generateData(20, {
        min: 0,
        max: 90
      })
    },
    {
      name: "Metric8",
      data: generateData(20, {
        min: 0,
        max: 90
      })
    },
    {
      name: "Metric9",
      data: generateData(20, {
        min: 0,
        max: 90
      })
    }
  ];

  const options = {
    dataLabels: {
      enabled: false
    },
    colors: ["#008FFB"],
    xaxis: {
      type: "category"
    }
  };

  return (
    <Card className="w-100">
      <Card.Header>
        <Card.Title tag="h5">Heatmap Chart</Card.Title>
      </Card.Header>
      <Card.Body>
        <div className="chart">
          <Chart options={options} series={data} type="heatmap" height="350" />
        </div>
      </Card.Body>
    </Card>
  );
};

export default HeatmapChart;
