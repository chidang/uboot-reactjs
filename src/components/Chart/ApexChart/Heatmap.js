import React from "react";
import Chart from "react-apexcharts";
import { Card } from 'react-bootstrap';

const HeatmapChart = () => {
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
      name: "Item 1",
      data: generateData(20, {
        min: 0,
        max: 90
      })
    },
    {
      name: "Item 2",
      data: generateData(20, {
        min: 0,
        max: 90
      })
    },
    {
      name: "Item 3",
      data: generateData(20, {
        min: 0,
        max: 90
      })
    },
    {
      name: "Item 4",
      data: generateData(20, {
        min: 0,
        max: 90
      })
    },
    {
      name: "Item 5",
      data: generateData(20, {
        min: 0,
        max: 90
      })
    },
    {
      name: "Item 6",
      data: generateData(20, {
        min: 0,
        max: 90
      })
    },
    {
      name: "Item 7",
      data: generateData(20, {
        min: 0,
        max: 90
      })
    },
    {
      name: "Item 8",
      data: generateData(20, {
        min: 0,
        max: 90
      })
    },
    {
      name: "Item 9",
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
