import './styles/app.css'
import SideBar from './components/SideBar'
import Login from './components/Login.jsx'
 import AppRoutes from './routes/AppRoutes'
function App() {

  return (
    <>

      <main>
        <nav className='app-nav'>
          <SideBar />
        </nav>
        <div className="hero">
          <div className='hero-box'>
            <div className="hero-line">
            <AppRoutes/>
            </div>
          </div>
        </div>
      </main>

    </>
  )
}



export default App
