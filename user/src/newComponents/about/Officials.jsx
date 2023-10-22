import React from 'react'

export default function Officials() {
  return (
    <>
      <div className='officials'>
        <div>
          <p  className="politicians" style={{ textAlign: 'center', width: '100%' }}>Remegio Marcelo Barnachea</p>
          <span className="below-text">BARANGAY CAPTAIN</span>
        </div>
        <div style={{ display: 'flex', gap: '1em' }}>
          <div className='items'>
            <p className="politicians">Danny Viernes Javien</p>
            <span class="below-text">BARANGAY KAGAWAD</span>
          </div>
          <div className='items'>
            <p className="politicians">Mariano Perez Cuaresma</p>
            <span className="below-text">BARANGAY KAGAWAD</span>

          </div> 
        </div>
        <div style={{ display: 'flex', gap: '1em' }}>
          <div className='items'>
            <p className="politicians"> Tito Dirilo Maala Sr</p>
            <span className="below-text">BARANGAY KAGAWAD</span>
          </div>
          <div className='items'>
            <p className="politicians"> Granie Langas Gabriel</p>
            <span className="below-text">BARANGAY KAGAWAD</span>
          </div>
        </div>
        <div style={{ display: 'flex', gap: '1em' }}>
          <div className='items'>
            <p className="politicians"> Nicolas Aceveda Lavarias</p>
            <span className="below-text">BARANGAY KAGAWAD</span>
          </div>
          <div className='items'>
            <p className="politicians"> Christopher Iluis Cabanela</p>
            <span className="below-text">BARANGAY KAGAWAD</span>
          </div>
        </div>
        <div style={{ display: 'flex', gap: '1em' }}>
          <div className='items'>
            <p className="politicians"> Reynaldo Yanguas Barnachea</p>
            <span className="below-text">BARANGAY KAGAWAD</span>
          </div>
          <div className='items'>
            <p className="politicians">Khoreyna Cocua Barnachea</p>
            <span className="below-text">SK CHAIRMAN</span>
          </div>
        </div>
      </div>
    </>
  )
}
