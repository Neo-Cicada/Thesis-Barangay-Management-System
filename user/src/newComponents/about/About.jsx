import React, { useState } from 'react'
import './about.css'
import AboutEB from './AboutEB'
import Location from './Location'
import Officials from './Officials'
const jsonData = {
  introduction: {
    title: 'What is EBarangay?',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque laud antium natus magnam esse tempore sapiente ducimus quisquam, quas repudiandae deleniti?',
    image:''
  },
  benefits:{
    title:'Benefits of EBarangay',
    description:'a lot',
    image:''
  },
  visson:{
    title:'Mission and Vission',
    description:'lorem20',
    image:''
  }
}

export default function About() {
  const [state, setState] = useState('default');
  return(
    <>
      <div className='about-new'>
        <p className='about-title'>About</p>
        <div className='about-body'>
          <div className='body-content'>
              {state==="default"&&<AboutEB
                title={jsonData.introduction.title}
                description={jsonData.introduction.description}
                />}
              {state==="two"&&<AboutEB
                 title={jsonData.benefits.title}
                 description={jsonData.benefits.description}
                 />}
              {state==="three"&&<AboutEB
                 title={jsonData.visson.title}
                 description={jsonData.visson.description}
                 />}
              {state==="four"&&<Location/>}
              {state==="five"&&<Officials/>}

          </div>
          <div className='body-navigation'>
            <ul>
              <li className='bd-nav-cirlces'
               onClick={()=>setState('default')}>

               </li>
              <li
                className='bd-nav-cirlces'
                onClick={()=>setState('two')}
              >

              </li>
              <li
                className='bd-nav-cirlces'
               onClick={()=>setState('three')}>

              </li>
              <li
                className='bd-nav-cirlces'
                onClick={()=>setState('four')}>

              </li>
              <li className='bd-nav-cirlces'
                  onClick={()=>setState('five')}
                >

              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}
