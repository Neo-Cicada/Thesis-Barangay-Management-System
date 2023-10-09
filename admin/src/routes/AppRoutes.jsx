import React from "react"
import { Route, Routes, Navigate } from 'react-router-dom'
import Certificate from '../components/certificate/Certificate'
import Announcement from '../components/announcement/Announcement'
import Enrollment from '../components/enrollment/Enrollment'
import Equipment from '../components/equipment/Equipment'
import Facilities from '../components/facilities/Facilities'
import Medicine from '../components/medicine/Medicine'
import Report from '../components/report/Report'
import Dashboard from '../components/dashboard/Dashboard'
import AnnouncementManagement from '../components/announcement/AnnouncementManagement'
import AnnouncementHistory from '../components/announcement/AnnouncementHistory'

import Profile from "../components/profile/Profile"
const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Dashboard />} />
      <Route path="report" element={<Report />} />
      <Route path='equipment' element={<Equipment />} />
      <Route path='certificate' element={<Certificate />} />




      <Route path='announcement' element={<Announcement />}>
        <Route path="announcement-management" element={<AnnouncementManagement />} />
        <Route path="announcement-history" element={<AnnouncementHistory />} />
        <Route index element={<Navigate to="announcement-management" />} />
      </Route>





      <Route path='enrollment' element={<Enrollment />} />

      <Route path='facilities' element={<Facilities />} />

      <Route path='medicine' element={<Medicine />} />

      <Route path="profile" element={<Profile />}>

      </Route>

    </Routes>
  )
}

export default AppRoutes