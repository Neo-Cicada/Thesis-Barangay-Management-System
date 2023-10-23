
import React, { useState, useEffect } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut, Pie } from 'react-chartjs-2';
import useRead from '../../hooks/useRead';
import { red } from '@mui/material/colors';
ChartJS.register(ArcElement, Tooltip, Legend);



export default function EnrollmentChart() {
  const [reData, setReData] = useState([])
  useRead('EnrollmentRequest', setReData);
  const [doughnutData, setDoughnutData] = useState([]);
  const [doughnutlabel, setDoughnutLabel] = useState([]);

  console.log(reData)

  useEffect(() => {
    const reportCounts = {};

    reData.forEach(item => {
      if (item.childInfo && item.childInfo.childGender) {
        const gender = item.childInfo.childGender;
        // Check if the gender is already in the reportCounts object, and increment the count
        reportCounts[gender] = (reportCounts[gender] || 0) + 1;
      }
    });

    // Extract names and counts from reportCounts
    const names = Object.keys(reportCounts);
    const counts = Object.values(reportCounts);

    console.log(names); // Check the names array
    console.log(counts); // Check the counts array

    // Update the state with the data for the doughnut chart
    setDoughnutData(counts);
    setDoughnutLabel(names);
  }, [reData]);


  console.log(doughnutData);
  console.log(doughnutlabel);
  // Create custom labels by combining labels and data
  let customLabels = doughnutlabel.map((label, index) => `${label} (${doughnutData[index]})`);

  const data = {

    labels: customLabels, //  custom labels here
    datasets: [
      {
        label: '# of Students',
        data: doughnutData,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <>

      <Doughnut
        width={100}
        height={50}

        data={data} options={{
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: 'top',
            },
            title: {
              display: true,
              text: 'Enrolled Students',
            },
          },
        }} />
    </>
  )
}
