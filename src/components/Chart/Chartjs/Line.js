import React from "react";
import { Line } from "react-chartjs-2";
import { Card } from 'react-bootstrap';

const LineChart = props => {
  const defaultTheme = { color: { primary: '#4285f4', success: '#7cb342', warning: '#f9b42a' } };
  const theme =  Object.assign( defaultTheme, props.theme);
  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ],
    datasets: [
      {
        label: "Sales ($)",
        fill: true,
        backgroundColor: "transparent",
        borderColor: theme.color.primary,
        data: [
          2115,
          1562,
          1584,
          1892,
          1487,
          2223,
          2966,
          2448,
          2905,
          3838,
          2917,
          3327
        ]
      },
      {
        label: "Orders",
        fill: true,
        backgroundColor: "transparent",
        borderColor: theme.tertiary,
        borderDash: [4, 4],
        data: [
          958,
          724,
          629,
          883,
          915,
          1214,
          1476,
          1212,
          1554,
          2128,
          1466,
          1827
        ]
      }
    ]
  };

  const options = {
    maintainAspectRatio: false,
    legend: {
      display: false
    },
    tooltips: {
      intersect: false
    },
    hover: {
      intersect: true
    },
    plugins: {
      filler: {
        propagate: false
      }
    },
    scales: {
      xAxes: [
        {
          reverse: true,
          gridLines: {
            color: "rgba(0,0,0,0.05)"
          }
        }
      ],
      yAxes: [
        {
          ticks: {
            stepSize: 500
          },
          display: true,
          borderDash: [5, 5],
          gridLines: {
            color: "rgba(0,0,0,0)",
            fontColor: "#fff"
          }
        }
      ]
    }
  };

  return (
    <Card className="w-100">
      <Card.Header>
        <Card.Title tag="h5">Line Chart</Card.Title>
      </Card.Header>
      <Card.Body>
        <div className="chart chart-sm">
          <Line data={data} options={options} />
        </div>
      </Card.Body>
    </Card>
  );
};

export default LineChart;
