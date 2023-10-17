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
    title: 'What is EBarangay?',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque laud antium natus magnam esse tempore sapiente ducimus quisquam, quas repudiandae deleniti?',
    image: ''
  },

  visson: {
    title: 'Mission and Vission',
    description: 'lorem20',
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
