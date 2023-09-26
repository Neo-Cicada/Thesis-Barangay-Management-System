import React, { useState } from 'react';
import './services.css';
import ServiceBox from './ServiceBox';
import MedicineIcon from '../../assets/medicine.svg';
import FacilityIcon from '../../assets/facility.svg';
import CertificateIcon from '../../assets/certificate.svg';
import EnrollmentIcon from '../../assets/enrollment.svg';
import ReportIcon from '../../assets/report.svg';
import Equipment from '../../assets/equipment.svg';
import MedicineDialogForm from '../newForms/MedicineDialogForm';

export default function Services() {
  const [isMedicineOpen, setIsMedicineOpen] = useState(false); // Initialize to false

  const handleClose = () => {
    setIsMedicineOpen(false);
  };

  return (
    <>
      <div className='services' id='services'>
        <p className='services-title'>Services</p>
        <div className='service-body'>
          <ServiceBox title={'Medicines'} image={MedicineIcon}  handleOpen={()=>setIsMedicineOpen(true)} />
          <ServiceBox title={'Certificates'} image={CertificateIcon} />
          <ServiceBox title={'Facility'} image={FacilityIcon} />
          <ServiceBox title={'Enrollment'} image={EnrollmentIcon} />
          <ServiceBox title={'Report'} image={ReportIcon} />
          <ServiceBox title={'Equipment'} image={Equipment} />
        </div>
      </div>
      <MedicineDialogForm open={isMedicineOpen} handleClose={handleClose} />
    </>
  );
}
