import './styles/app.css'
import { Route, Routes } from 'react-router-dom'
import Certificate from './components/Certificate'
import Announcement from './components/Announcement'
import Enrollment from './components/Enrollment'
import Equipment from './components/Equipment'
import Facilities from './components/Facilities'
import Medicine from './components/Medicine'
import SideBar from './components/SideBar'

import EquipManage from './pages/EquipManage'
import EquipmentRequestList from './pages/EquipmentRequestList'
import EquipmentStatus from './pages/EquipmentStatus'
function App() {

  return (
    <>
      <header>

      </header>
      <main>
        <nav className='app-nav'>
          <SideBar />
        </nav>
        <div className="hero">
          <div className='hero-box'>
            <div className="hero-line">
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
                  />
                </Route>
                <Route path='certificate' element={<Certificate />} />
                <Route path='announcement' element={<Announcement />} />
                <Route path='enrollment' element={<Enrollment />} />
                <Route path='facilities' element={<Facilities />} />
                <Route path='medicine' element={<Medicine />} />
              </Routes>
            </div>
          </div>
        </div>
      </main>

    </>
  )
}

export default App
