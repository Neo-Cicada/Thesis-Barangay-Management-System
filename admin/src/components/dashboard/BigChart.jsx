import React, { useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import faker from 'faker';
import useRead from '../../hooks/useRead'
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);



export function BigChart() {
  const [complaints, setComplaints] = useState([]);
  const [equipments, setEquipment] = useState([]);
  const [docs, setDocs] = useState([]);
  const [enrollments, setEnrollments] = useState([]);
  const [facilities, setFacilities] = useState([]);
  const [medicines, setMedicines] = useState([]);

  useRead('ReportRequest', setComplaints);
  useRead('MedicineRequest',setMedicines)
  useRead('FacilityRequest',setFacilities)
  useRead('EquipmentRequest', setEquipment)
  useRead('EnrollmentRequest',setEnrollments)
  useRead('CertificateRequest',setDocs)

  const lComplaints = complaints.filter(item => item.status ==='accepted').length
  const lEquip = equipments.filter(item => item.status ==='accepted').length
  const lDocs = docs.filter(item => item.status ==='accepted').length
  const lenroll = enrollments.filter(item => item.status ==='accepted').length
  const lmedicines = medicines.filter(item => item.status ==='accepted').length
  const lfacilities = facilities.filter(item => item.status ==='accepted').length

  const rComplaints = complaints.filter(item => item.status ==='rejected').length
  const rEquip = equipments.filter(item => item.status ==='rejected').length
  const rDocs = docs.filter(item => item.status ==='rejected').length
  const renroll = enrollments.filter(item => item.status ==='rejected').length
  const rmedicines = medicines.filter(item => item.status ==='rejected').length
  const rfacilities = facilities.filter(item => item.status ==='rejected').length

  const options = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Management Chart',
      },
    },
  };

  const labels = ['Complaints', 'Equipment', 'Documents', 'Enrollments', 'Facilities', 'Medicines'];

  const data = {
    labels,
    datasets: [
      {
        label: 'Accepted',
        data: [lComplaints,lEquip,lDocs,lenroll,lfacilities,lmedicines],
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Rejected',
        data: [rComplaints,rEquip,rDocs,renroll,rfacilities,rmedicines],
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };
  return (
    <>
      <Bar
        width={100}
        height={50}
        options={options} data={data} />
    </>
  )
}
