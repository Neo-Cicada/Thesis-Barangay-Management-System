import '.././styles/app.css'
import SideBar from './SideBar'
import AppRoutes from '../routes/AppRoutes'
export default function Main() {

    return (
        <>

            <main>
                <nav className='app-nav'>
                    <SideBar />
                </nav>
                <div className="hero">
                    <div className='hero-box'>
                        <div className="hero-line">
                            <AppRoutes />
                        </div>
                    </div>
                </div>
            </main>

        </>
    )
}



