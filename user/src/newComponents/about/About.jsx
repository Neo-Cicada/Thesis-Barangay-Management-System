import React, { useState } from 'react'
import './about.css'
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
  benefits: {
    title: 'Benefits of EBarangay',
    description: 'a lot',
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
        <p className='about-title'>About</p>
        <div className='about-body'>
          <div className='body-content'>
            {state === "default" && <AboutEB
              image={Image}
              title={jsonData.introduction.title}
              description={jsonData.introduction.description}
            />}
            {state === "two" && <AboutEB
              image={Image2}

              title={jsonData.benefits.title}
              description={jsonData.benefits.description}
            />}
            {state === "three" && <AboutEB
              image={Image2}
              title={jsonData.visson.title}
              description={jsonData.visson.description}
            />}
            {state === "four" && <Location />}
            {state === "five" && <Officials />}

          </div>
          <AboutNavigation state={state} setState={setState} />
        </div>
      </div>
    </>
  )
}
