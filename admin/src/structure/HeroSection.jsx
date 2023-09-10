import React from 'react'

const HeroSection = ({children}) => {

    const style = {
      width: '100%',
      height: '90%',
      border:'1px solid red'
    }

    return(
    <div style={style}>
      {children}
    </div>
    )
  }
export default HeroSection

