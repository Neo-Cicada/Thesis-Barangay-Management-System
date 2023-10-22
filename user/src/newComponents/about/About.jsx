import React, { useState } from 'react'
import './about.css'
import {Container} from '@mui/material'
import AboutEB from './AboutEB'
import Location from './Location'
import Officials from './Officials'
import Image from '../../assets/imgs.jpg'
import Image2 from '../../assets/imgs2.jpg'
// import Image3 from '../../assets/imgs3.jpg'
import AboutNavigation from './AboutNavigation'
const jsonData = {
  introduction: {
    title: 'What is eBarangay?',
    description: "eBarangay empowers officials while making resident satisfaction the core of governance. Request medicines, documents, facility access, equipment, and voice concerns - all efficiently, quickly, and accurately. Your needs, our priority.",
    image: ''
  },

  visson: {
    title: ' Mission and Vission',
    description: ' Empowering Communities, Enhancing Lives  and to create connected, efficient, and responsive communities through technology, ensuring the well-being of every resident.',
    image: ''
  }
}

export default function About() {
  const [state, setState] = useState('default');
  return (
    <>
      <div className='about-new' id='about'>
        <Container><p className='about-title'>About</p></Container>
        
        <div className='about-body'>
          <div className='body-content'>
            {state === "default" && <AboutEB
              image={Image}
              title={jsonData.introduction.title}
              description={jsonData.introduction.description}
            />}
            {state === "three" && <AboutEB
              image={Image2}
              title={jsonData.visson.title}
              description={jsonData.visson.description}
            />}
            {state === "four" && <Officials />}

          </div>
          <AboutNavigation state={state} setState={setState} />
        </div>
      </div>
    </>
  )
}
