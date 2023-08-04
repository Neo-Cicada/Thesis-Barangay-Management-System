import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import Home from './home/Home'
import Forms from './Forms'
import Report from './report/Report'

import CertificateForm from '../formComponents/CertificateForm'
import EnrollmentForm from '../formComponents/EnrollmentForm'
import FacilityForm from '../formComponents/FacilityForm'
import MedicineForm from '../formComponents/MedicineForm'
import EquipmentForm from '../formComponents/EquipmentForm'
export default function AppRouter() {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='forms' element={<Forms/>}>
          <Route path='certificate-request-form' element={<CertificateForm/>}/>
          <Route path='enrollment-request-form' element={<EnrollmentForm/>}/>
          <Route path="facility-request-form" element={<FacilityForm/>}/>
          <Route path="medicine-request-form" element={<MedicineForm/>}/>
          <Route path="equipment-request-form" element={<EquipmentForm/>}/>
          <Route index element={<Navigate to='certificate-request-form'/>}/>
        </Route>
        <Route path='report' element={<Report/>}/>
    </Routes>
  )
}
