import React from "react"
import { Route, Routes, Navigate } from 'react-router-dom'
import Certificate from '../components/certificate/Certificate'
import Announcement from '../components/announcement/Announcement'
import Enrollment from '../components/enrollment/Enrollment'
import Equipment from '../components/equipment/Equipment'
import Facilities from '../components/facilities/Facilities'
import Medicine from '../components/medicine/Medicine'

import FacilityManagement from '../components/facilities/FacilityManagement'
import FacilityRequest from '../components/facilities/FacilityRequest'
import FacilityStatus from '../components/facilities/FacilityStatus'

import FacilityOngoing from '../components/facilities/FacilityOngoing'
import FacilityCompleted from '../components/facilities/FacilityCompleted'
import FacilityRejected from '../components/facilities/FacilityRejected'

import AnnouncementManagement from '../components/announcement/AnnouncementManagement'
import AnnouncementHistory from '../components/announcement/AnnouncementHistory'

import Profile from "../components/profile/Profile"
const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Equipment />} />
      <Route path='certificate' element={<Certificate />} />




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
          <Route path="ongoing" element={<FacilityOngoing />} />
          <Route path="completed" element={<FacilityCompleted />} />
          <Route path="rejected" element={<FacilityRejected />} />
          <Route index element={<Navigate to="ongoing" />} />
        </Route>
      </Route>

      <Route path='medicine' element={<Medicine />} />

      <Route path="profile" element={<Profile />}>

      </Route>

    </Routes>
  )
}

export default AppRoutes