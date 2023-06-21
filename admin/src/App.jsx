import './styles/app.css'
import { Route, Routes } from 'react-router-dom'
import Certificate from './components/Certificate'
import Announcement from './components/Announcement'
import Enrollment from './components/Enrollment'
import Equipment from './components/Equipment'
import Facilities from './components/Facilities'
import Medicine from './components/Medicine'
import SideBar from './components/SideBar'
function App() {

  return (
    <>
      <header>

      </header>
      <main>
        <nav>
        <SideBar/>
        </nav>
        <div className="hero">
          <div className='hero-box'>
            <Routes>
            <Route path='/' element={<Equipment/>}/>
            <Route path='certificate' element={<Certificate/>}/>
            <Route path='announcement' element={<Announcement/>}/>
            <Route path='enrollment'element={<Enrollment/>}/>
            <Route path='facilities' element={<Facilities/>}/>
            <Route path='medicine'element={<Medicine/>}/>
          </Routes>
          </div>
        </div>
      </main>

    </>
  )
}

export default App
