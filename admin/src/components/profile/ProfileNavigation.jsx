import React from 'react'

export default function ProfileNavigation({ setStatus, status }) {
    const btnStyle = {
        border: '0',
        background: 'none',
        borderRadius: '0px',
        fontSize: '1.1rem',
        cursor: 'pointer',
        borderBottom: 'none'
    }
    const activeBtn = {
        border: '0',
        background: 'none',
        borderRadius: '0px',
        fontSize: '1.1rem',
        cursor: 'pointer',
        borderBottom: '5px solid #3b5998'
    }
  return (
    <>
       <div style={{
               borderBottom: '2px solid #868686',
               display: 'flex',
               gap: '1.5em',
               /* Clamp the width to 768px on mobile devices */
               maxWidth: 'minMax(768px, 100%)'
            }}>
                <button
                    style={status === 'default' ? activeBtn : btnStyle}
                    onClick={() => setStatus("default")}

                >
                    Profile Information</button>
                <button
                    style={status === 'second' ? activeBtn : btnStyle}
                    onClick={() => setStatus("second")}>Manage Admins</button>
                
            </div>
    </>
  )
}
