import './App.css'
import NavBar from './components/NavBar'
import AppRouter from './components/AppRouter'
import textLogo from '../src/assets/ebarangay.png'
import NewHeader from './newComponents/newHeader/NewHeader'
import Introduction from './newComponents/introduction/Introduction'
import Announcement from './newComponents/announcement/Announcement'
function App() {


  return (
    <>
      <NewHeader/>
      <Introduction/>
      <Announcement/>
      <div style={{height:'50vh'}}></div>
    </>
  )
}

export default App
