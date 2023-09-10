import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import { Container } from '@mui/material'
import ScrollableContainer from '../ScrollableContainer';
import DashboardItem from '../DashboardItem';
import useRead from '../../hooks/useRead';
import MedicineAdd from './MedicineAdd';

export default function MedicineCrud() {
    const [data, setData] = useState([]);
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    useRead('Medicines', setData);
    const items = data.map(item => <DashboardItem data={item} path="Medicines" name={item.type}/>)
    const handleDialogClose = () => {
      setIsDialogOpen(!isDialogOpen);
  };  

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
                    <div style={{width:'28em', display:'flex',
                     justifyContent:'space-between', alignItems:'center', paddingLeft:'0.6em'}}>
                        <div style={{fontSize:'1.2rem'}}>Name</div>
                        <div style={{fontSize:'1.2rem'}}>Quantity</div>
                        <div></div>

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
    <MedicineAdd
                handleDialogClose={handleDialogClose}
                isDialogOpen={isDialogOpen}
                setIsDialogOpen={setIsDialogOpen}
            />
    </>
  )
}
