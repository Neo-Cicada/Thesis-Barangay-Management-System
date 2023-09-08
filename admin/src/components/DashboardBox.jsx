import React from 'react'

export default function DashboardBox({name, numbers, logo}) {
    return (
        <>
            <div style={{
                height: '6em',
                width: '12em',
                borderRadius: '0.8em',
                boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px',
            }}>
                <div>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        padding: '1em'}}>
                        <p style={{
                            color:'#868686',
                            fontSize:'1rem',
                            }}>{name}</p>
                        <div style={{
                            display:'flex',
                            justifyContent:'center',
                            alignItems:'center',
                            height: '1.8em',
                            width:'3em'}}>
                            {logo}
                        </div>
                    </div>
                    <div>
                        <div  style={{paddingLeft:'1em', fontSize:'1.5rem', color:'#3b5998'}}>{numbers}</div>
                    </div>
                </div>
            </div>
        </>
    )
}
