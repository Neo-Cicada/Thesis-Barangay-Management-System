import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import { Container } from '@mui/material'
import ScrollableContainer from '../ScrollableContainer';
import DashboardItem from '../DashboardItem';
import useRead from '../../hooks/useRead';
import CertificateAdd from './CertificateAdd'
export default function CertificateCrud() {
    const [data, setData] = useState([]);
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    useRead('Certificates', setData);
    const handleDialogClose = () => {
      setIsDialogOpen(!isDialogOpen);
  };
    const items = data.map(item => <DashboardItem data={item} path="Certificates"/>)
  return (
    <>
    <Container sx={{ height:'100%'}}>
      <Container
                    style={{
                        borderBottom: '1px solid black',
                        height: '10%',
                        display:'flex',
                        justifyContent:'space-between'
                    }}
                >
                    <div>

                    </div>
                    <div
                      onClick={() => setIsDialogOpen(true)}
                        style={{height:'100%',
                        cursor: 'pointer', width:'10em',
                        display:'flex',
                        justifyContent:'center',
                        alignItems:'center',
                        textAlign:'center'}}
                    > <AddIcon /> Add Inventory</div>
                </Container>
                <ScrollableContainer>
                    {items}
                </ScrollableContainer>
    </Container>
      <CertificateAdd
         handleDialogClose={handleDialogClose}
         isDialogOpen={isDialogOpen}
         setIsDialogOpen={setIsDialogOpen}
      />
    </>
  )
}
