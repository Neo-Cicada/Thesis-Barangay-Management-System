import './App.css'
import NavBar from './components/NavBar'
import AppRouter from './components/AppRouter'
import textLogo from '../src/assets/ebarangay.png'
function App() {


  return (
    <>
      <header>
        <div className='header-container'>
          <a href=""><img src={textLogo} style={{height: '18em'}} /></a>
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
