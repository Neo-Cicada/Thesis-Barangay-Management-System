import '.././styles/app.css'
import SideBar from './SideBar'
import AppRoutes from '../routes/AppRoutes'
import SendSms from '../components/SendSms'
import SendEmail  from '../components/SendEmail'
export default function Main({ handleSignout }) {

    return (
        <>

            <main style={{}}>
                <nav className='app-nav'>
                    <SideBar handleSignout={handleSignout} />
                </nav>

                <div className='hero-box'>
                    <AppRoutes />
                </div>
                {/* <SendEmail/> */}
            </main>

        </>
    )
}



