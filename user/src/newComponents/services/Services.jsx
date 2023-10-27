import React, { useState } from 'react';
import './services.css';
import ServiceBox from './ServiceBox';
import MedicineIcon from '../../assets/medicine.svg';
import FacilityIcon from '../../assets/facility.svg';
import CertificateIcon from '../../assets/certificate.svg';
import EnrollmentIcon from '../../assets/enrollment.svg';
import ReportIcon from '../../assets/report.svg';
import Equipment from '../../assets/equipment.svg';
import Garbage from '../../assets/garbage.svg'
import MedicineDialogForm from '../newForms/med/MedicineDialogForm';
import CertificateDialog from '../newForms/cert/CertificateDialog';
import EnrollmentDialog from '../newForms/enroll/EnrollmentDialog'
import FacilityDialog from '../newForms/faci/FacilityDialog'
import ReportDialog from '../newForms/report/ReportDialog'
import EquipmentDialog from '../newForms/equip/EquipmentDialog';
import { Container } from '@mui/material';
export default function Services() {
  const [isMedicineOpen, setIsMedicineOpen] = useState(false); // Initialize to false
  const [isCertificateOpen, setIsCertificateOpen] = useState(false);
  const [isEnrollmentOpen, setIsEnrollmentOpen] = useState(false)
  const [isFacilityOpen, setIsFacilityOpen] = useState(false)
  const [isReportOpen, setIsReportOpen] = useState(false)
  const [isEquipmentOpen, setIsEquipmentOpen] = useState(false)
  const handleClose = () => {
    setIsMedicineOpen(false);
  };
  const handleCertificateClose = () => {
    setIsCertificateOpen(false);
  };
  return (
    <>
      <div className='services' id='services'>
        <Container>
          <p className='services-title'>Services</p>
        </Container>

        <div className='service-body'>
          <ServiceBox
            title={'Medicines'}
            image={MedicineIcon}
            handleOpen={() => setIsMedicineOpen(true)} />
          <ServiceBox
            title={'Documents'}
            image={CertificateIcon}
            handleOpen={() => setIsCertificateOpen(true)}
          />
          <ServiceBox
            title={'Facility'}
            image={FacilityIcon}
            handleOpen={() => setIsFacilityOpen(true)} />
          <ServiceBox
            title={'Enrollment'}
            image={EnrollmentIcon}
            handleOpen={() => setIsEnrollmentOpen(true)}
          />
          <ServiceBox
            title={'Complain'}
            image={ReportIcon}
            handleOpen={() => setIsReportOpen(true)}
          />
          <ServiceBox
            title={'Equipment'}
            image={Equipment}
            handleOpen={() => setIsEquipmentOpen(true)}
          />
          <ServiceBox
            title={'Garbage Collection'}
            image={Garbage}
            handleOpen={() => setIsEquipmentOpen(true)}
          />
        </div>
      </div>
      <MedicineDialogForm
        open={isMedicineOpen}
        handleClose={handleClose} />

      <CertificateDialog
        open={isCertificateOpen}
        handleClose={handleCertificateClose} />

      <EnrollmentDialog
        open={isEnrollmentOpen}
        handleClose={() => setIsEnrollmentOpen(false)} />
      <EquipmentDialog
        open={isEquipmentOpen}
        handleClose={() => setIsEquipmentOpen(false)} />
      <FacilityDialog
        open={isFacilityOpen}
        handleClose={() => setIsFacilityOpen(false)} />
      <ReportDialog
        open={isReportOpen}
        handleClose={() => setIsReportOpen(false)} />
    </>
  );
}
