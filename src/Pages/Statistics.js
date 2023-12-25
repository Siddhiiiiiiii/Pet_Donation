// Statistics.js

import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import 'chart.js/auto'; // Make sure to import 'chart.js/auto'
import '../CSS/Statistics.css';

const Statistics = () => {
    <div> <h1> Our Journey so far......</h1></div>
  const chartData = {
    
    labels: ['Pets Adopted', 'Pets Rescued', 'Clients Connected'],
    datasets: [
      {
        data: [500, 200, 1000],
        backgroundColor: ['#36A2EB', '#FFCE56', '#FF6384'],
      },
    ],
  };

  return (
    <div className="statistics-container">
      <div className="chart-container">
        <Doughnut data={chartData} />
      </div>

      {/* <div className="statistic">
        <h3>Services Provided</h3>
        <p>24/7 Adoption, Veterinary Care,...</p> Add a list of services */}
      {/* </div> */}
    </div>
  );
};

export default Statistics;


