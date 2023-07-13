import './App.css'
import NavBar from './components/NavBar'
import AppRouter from './components/AppRouter'
function App() {


  return (
    <>
      <header>
        <div className='header-container'>
          <a href=""><h1>e-Barangay</h1></a>
          <NavBar/>
        </div>
      </header>
      <main>
        <div className='main-container'>
          <AppRouter/>
        </div>
      </main>
      <footer>
        <div className='footer-container'>

        </div>
      </footer>
    </>
  )
}

export default App
