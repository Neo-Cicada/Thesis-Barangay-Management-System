import React from "react"
import { Route, Routes, Navigate } from 'react-router-dom'
import Certificate from '../components/certificate/Certificate'
import Announcement from '../components/announcement/Announcement'
import Enrollment from '../components/enrollment/Enrollment'
import Equipment from '../components/equipment/Equipment'
import Facilities from '../components/facilities/Facilities'
import Medicine from '../components/medicine/Medicine'


import EquipManage from '../components/equipment/EquipManage'
import EquipmentRequestList from '../components/equipment/EquipmentRequestList'
import EquipmentStatus from '../components/equipment/EquipmentStatus'

import EquipmentOngoing from '../components/equipment/EquipmentOngoing'
import EquipmentCompleted from '../components/equipment/EquipmentCompleted'
import EquipmentRejected from '../components/equipment/EquipmentRejected'

import CertificateManagement from '../components/certificate/CertificateManagement'
import CertificateRequest from '../components/certificate/CertificateRequest'
import CertificateStatus from '../components/certificate/CertificateStatus'

import CertificateOngoing from '../components/certificate/CertificateOngoing'
import CertificateCompleted from'../components/certificate/CertificateCompleted'
import CertificateRejected from '../components/certificate/CertificateRejected'

import MedicineManagement from '../components/medicine/MedicineManagement'
import MedicineRequestList from '../components/medicine/MedicineRequestList'
import MedicineStatus from '../components/medicine/MedicineStatus'

import MedicineOngoing from '../components/medicine/MedicineOngoing'
import MedicineCompleted from '../components/medicine/MedicineCompleted'
import MedicineRejected from '../components/medicine/MedicineRejected'

import FacilityManagement from '../components/facilities/FacilityManagement'
import FacilityRequest from '../components/facilities/FacilityRequest'
import FacilityStatus from '../components/facilities/FacilityStatus'

import FacilityOngoing from '../components/facilities/FacilityOngoing'
import FacilityCompleted from '../components/facilities/FacilityCompleted'
import FacilityRejected from '../components/facilities/FacilityRejected'

import AnnouncementManagement from '../components/announcement/AnnouncementManagement'
import AnnouncementHistory from '../components/announcement/AnnouncementHistory'
const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Equipment />}>
        <Route
          path='/'
          element={<EquipManage />}
        />
        <Route
          path='request'
          element={<EquipmentRequestList />}
        />

        <Route
          path='status'
          element={<EquipmentStatus />}
        >
          <Route
            path='ongoing'
            element={<EquipmentOngoing />}
          />
          <Route
            path='completed'
            element={<EquipmentCompleted />}
          />
          <Route
            path='rejected'
            element={<EquipmentRejected />}
          />
          <Route index element={<Navigate to='ongoing' replace />} />


        </Route>
      </Route>
      <Route path='certificate' element={<Certificate />} >
        <Route path='manage-certificate' element={<CertificateManagement />} />
        <Route index element={<Navigate to='manage-certificate' replace />} />
        <Route path='request-list-certificate' element={<CertificateRequest />} />
        <Route path='certificate-status' element={<CertificateStatus />}>
          <Route path="ongoing" element={<CertificateOngoing/>} />
          <Route index element={<Navigate to="ongoing" replace/>}/>
          <Route path="completed" element={<CertificateCompleted/>}/>
          <Route path="rejected" element={<CertificateRejected/>}/>
        </Route>

      </Route>

      <Route path='announcement' element={<Announcement />}>
        <Route path="announcement-management" element={<AnnouncementManagement />} />
        <Route path="announcement-history" element={<AnnouncementHistory />} />
        <Route index element={<Navigate to="announcement-management" />} />
      </Route>





      <Route path='enrollment' element={<Enrollment />} />

      <Route path='facilities' element={<Facilities />}>
        <Route path="facility-management" element={<FacilityManagement />} />
        <Route index element={<Navigate to='facility-management' replace />} />
        <Route path="facility-request-list" element={<FacilityRequest />} />
        <Route path="facility-status" element={<FacilityStatus />}>
          <Route path="ongoing" element={<FacilityOngoing/>}/>
          <Route path="completed" element={<FacilityCompleted/>}/>
          <Route path="rejected" element={<FacilityRejected/>}/>
          <Route index element={<Navigate to="ongoing"/>}/>
        </Route>
      </Route>

      <Route path='medicine' element={<Medicine />} >
        <Route path='manage-medicine' element={<MedicineManagement />} />
        <Route index element={<Navigate to='manage-medicine' replace />} />

        <Route path='request-list-medicine' element={<MedicineRequestList />} />
        <Route path='medicine-status' element={<MedicineStatus />} >
          <Route path="ongoing" element={<MedicineOngoing/>}/>
          <Route path="completed" element={<MedicineCompleted/>}/>
          <Route path="rejected" element={<MedicineRejected/>}/>
          <Route index element={<Navigate to="ongoing"/>}/>

        </Route>

      </Route>


    </Routes>
  )
}

export default AppRoutes