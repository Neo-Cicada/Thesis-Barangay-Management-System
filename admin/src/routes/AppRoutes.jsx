import React from "react"
import { Route, Routes, Navigate  } from 'react-router-dom'
import Certificate from '../components/Certificate'
import Announcement from '../components/Announcement'
import Enrollment from '../components/Enrollment'
import Equipment from '../components/Equipment'
import Facilities from '../components/Facilities'
import Medicine from '../components/Medicine'


import EquipManage from '../pages/EquipManage'
import EquipmentRequestList from '../pages/EquipmentRequestList'
import EquipmentStatus from '../pages/EquipmentStatus'

import EquipmentOngoing from '../pages/EquipmentOngoing'
import EquipmentCompleted from '../pages/EquipmentCompleted'
import EquipmentRejected from '../pages/EquipmentRejected'

import CertificateManagement from '../pages/CertificateManagement'
import CertificateRequest from '../pages/CertificateRequest'
import CertificateStatus from '../pages/CertificateStatus'

import MedicineManagement from '../pages/MedicineManagement'
import MedicineRequestList from '../pages/MedicineRequestList'
import MedicineStatus from '../pages/MedicineStatus'
    
const AppRoutes = () =>{
    return(
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
                      element={<EquipmentOngoing/>}
                    />
                    <Route
                      path='completed'
                      element={<EquipmentCompleted/>}
                    />
                    <Route
                      path='rejected'
                      element={<EquipmentRejected/>}
                    />
                    <Route index element={<Navigate to='ongoing' replace />} />


                  </Route>
                </Route>
                <Route path='certificate' element={<Certificate />} >
                      <Route path='manage-certificate' element={<CertificateManagement/>}/>
                      <Route index element={<Navigate to='manage-certificate' replace/>}/>
                      <Route path ='request-list-certificate' element={<CertificateRequest/>}/>
                      <Route path='certificate-status' element={<CertificateStatus/>}/>

                </Route>

                <Route path='announcement' element={<Announcement />} />
                <Route path='enrollment' element={<Enrollment />} />
                <Route path='facilities' element={<Facilities />} />

                <Route path='medicine' element={<Medicine />} >
                  <Route path='manage-medicine' element={<MedicineManagement/>} />
                  <Route index element={<Navigate to='manage-medicine' replace/>} />

                  <Route path='request-list-medicine' element={<MedicineRequestList/>} />
                  <Route path='medicine-status' element={<MedicineStatus/>} />

                </Route>


              </Routes>
    )
}

export default AppRoutes