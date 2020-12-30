import React from "react";
import { Line } from "react-chartjs-2";

const LineChart = () => {
  let theme = { primary: '#4285f4' }
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
        borderColor: theme.primary,
        data: [
          3005,
          1765,
          1423,
          1896,
          1588,
          2345,
          2969,
          2418,
          3802,
          4938,
          3817,
          4827
        ]
      },
      {
        label: "Orders",
        fill: true,
        backgroundColor: "transparent",
        borderColor: theme.tertiary,
        borderDash: [4, 4],
        data: [
          928,
          734,
          626,
          893,
          921,
          1202,
          1396,
          1232,
          1524,
          2102,
          1506,
          1887
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
            stepSize: 1000
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
    <Line data={data} options={options} />
  );
};

export default LineChart;
