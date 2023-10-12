
import React, { useState, useEffect } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut, Pie } from 'react-chartjs-2';
import useRead from '../../hooks/useRead';
ChartJS.register(ArcElement, Tooltip, Legend);



export default function CertificateChart() {
  const [reData, setReData] = useState([])
  useRead('CertificateRequest', setReData)
  const [doughnutData, setDoughnutData] = useState([]); // State for data values
  const [doughnutlabel, setDoughnutLabel] = useState([]); // State for labels

  useEffect(() => {
    const reportCounts = {};

    reData.forEach(item => {
      if (item.selectedCertificates) {
        item.selectedCertificates.forEach(report => {
          const name = report.name;
          reportCounts[name] = (reportCounts[name] || 0) + 1;
        });
      }
    });

    // Extract names and counts from reportCounts
    const names = Object.keys(reportCounts);
    const counts = Object.values(reportCounts);

    // Update the state with the data for the doughnut chart
    setDoughnutData(counts);
    setDoughnutLabel(names);
  }, [reData]);

  console.log(doughnutData);
  console.log(doughnutlabel);
  // Create custom labels by combining labels and data
  let customLabels = doughnutlabel.map((label, index) => `${label} (${doughnutData[index]})`);

  const data = {

    labels: customLabels, // Use custom labels here
    datasets: [
      {
        label: '# of documents',
        data: doughnutData, // Use data values here
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
              text: 'Most Requested Documents',
            },
          },
        }} />
    </>
  )
}
