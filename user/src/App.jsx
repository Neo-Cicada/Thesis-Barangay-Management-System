import './App.css'
import NavBar from './components/NavBar'
import AppRouter from './components/AppRouter'
import textLogo from '../src/assets/ebarangay.png'
import NewHeader from './newComponents/newHeader/NewHeader'
import Introduction from './newComponents/introduction/Introduction'
import Announcement from './newComponents/announcement/Announcement'
import Services from './newComponents/services/Services'
import About from './newComponents/about/About'
import Footer from './newComponents/footer/Footer'
function App() {


  return (
    <>
      <NewHeader/>
      <Introduction/>
      <hr/>
      <Announcement/>
      <hr/>

      <Services/>
      <hr/>

      <About/>
      <hr />
      <Footer/>
    </>
  )
}

export default App
