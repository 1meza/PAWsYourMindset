import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const options = {
  scales: {
    y: {
      beginAtZero: true,
      ticks: {
        // Include a dollar sign in the ticks and ensure only integer values
        callback: function(value) {
          if (Number.isInteger(value)) {
            return `${value}`;
          }
        },
      },
    },
  },
  plugins: {
    legend: {
      display: false, // You can change this to true if you want to display the legend
    },
    title: {
      display: true,
      text: 'Custom Chart Title',
    },
  },
};

const BarGraph = () => {
  const labels = ['Label 1', 'Label 2', 'Label 3', 'Label 4', 'Label 5'];

  const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };

  return <Bar options={options} data={data} />;
};

export default BarGraph;
