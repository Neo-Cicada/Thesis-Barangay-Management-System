import React from 'react'
import './about.css'
export default function AboutNavigation({ state, setState }) {

    return (
        <>
            <div className='body-navigation'>
                <ul>
                    <li className='bd-nav-cirlces'
                        style={state === "default" ? { backgroundColor: "#3B5998" } : {}}
                        onClick={() => setState('default')}>

                    </li>
                    <li
                        className='bd-nav-cirlces'
                        style={state === "three" ? { backgroundColor: "#3B5998" } : {}}
                        onClick={() => setState('three')}>

                    </li>
                    <li
                        className='bd-nav-cirlces'
                        style={state === "four" ? { backgroundColor: "#3B5998" } : {}}
                        onClick={() => setState('four')}>

                    </li>
                   
                </ul>
            </div>
        </>
    )
}
