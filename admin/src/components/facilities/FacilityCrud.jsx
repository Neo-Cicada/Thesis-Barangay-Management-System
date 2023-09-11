import React from 'react'
import { Container } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
export default function FacilityCrud() {
  return (
    <>
       <Container
                sx={{
                    height: '100%',
                }}
            >
                <Container
                    style={{
                        borderBottom: '1px solid black',
                        height: '10%',
                        display:'flex',
                        justifyContent:'space-between'
                    }}
                >
                    <div style={{width:'28em', display:'flex',
                     justifyContent:'space-between', alignItems:'center', paddingLeft:'0.6em'}}>
                        <div style={{fontSize:'1.2rem'}}>Name</div>
                        <div style={{fontSize:'1.2rem'}}>Available Time</div>
                        <div></div>

                    </div>
                    <div
                        // onClick={() => setIsDialogOpen(true)}
                        style={{height:'100%',
                        cursor: 'pointer', width:'10em',
                        display:'flex',
                        justifyContent:'center',
                        alignItems:'center',
                        textAlign:'center'}}
                    > <AddIcon /> Add Facility</div>
                </Container>
                
            </Container>
    </>
  )
}
