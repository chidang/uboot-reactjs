import React from "react";
import { Bar } from "react-chartjs-2";
import { Card } from 'react-bootstrap';

const BarChart = props => {
  const defaultTheme = { color: { primary: '#4285f4' } };
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
        label: "Last year",
        backgroundColor: theme.color.primary,
        borderColor: theme.color.primary,
        hoverBackgroundColor: theme.color.primary,
        hoverBorderColor: theme.color.primary,
        data: [23, 45, 78, 74, 11, 22, 56, 75, 29, 88, 76, 57],
        barPercentage: 0.75,
        categoryPercentage: 0.5
      },
      {
        label: "This year",
        backgroundColor: "#E8EAED",
        borderColor: "#E8EAED",
        hoverBackgroundColor: "#E8EAED",
        hoverBorderColor: "#E8EAED",
        data: [44, 52, 66, 83, 43, 38, 39, 59, 87, 86, 98, 90],
        barPercentage: 0.75,
        categoryPercentage: 0.5
      }
    ]
  };

  const options = {
    maintainAspectRatio: false,
    legend: {
      display: false
    },
    scales: {
      yAxes: [
        {
          gridLines: {
            display: false
          },
          stacked: false,
          ticks: {
            stepSize: 20
          }
        }
      ],
      xAxes: [
        {
          stacked: false,
          gridLines: {
            color: "transparent"
          }
        }
      ]
    }
  };

  return (
    <Card className="flex-fill w-100">
      <Card.Header>
        <Card.Title tag="h5">Bar Chart</Card.Title>
      </Card.Header>
      <Card.Body>
        <div className="chart chart-sm">
          <Bar data={data} options={options} />
        </div>
      </Card.Body>
    </Card>
  );
};

export default BarChart;
