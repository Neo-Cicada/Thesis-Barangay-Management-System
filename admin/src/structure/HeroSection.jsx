import React from 'react'

const HeroSection = ({children}) => {

    const style = {
      border: '1px solid red',
      width: '100%',
      height: '90%'
    }

    return(
    <div style={style}>
      {children}
    </div>
    )
  }
export default HeroSection

