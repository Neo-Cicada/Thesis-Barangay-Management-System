import React, { useState, useEffect } from 'react'
import AddIcon from '@mui/icons-material/Add';
import { Container, Skeleton } from '@mui/material'
import ScrollableContainer from '../ScrollableContainer';
import DashboardItem from '../DashboardItem';
import useRead from '../../hooks/useRead';
import MedicineAdd from './MedicineAdd';

export default function MedicineCrud() {
  const [data, setData] = useState([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true)
  useRead('Medicines', setData);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);
  const items = data.map(item => <DashboardItem data={item} path="Medicines" name={item.type} />)
  const handleDialogClose = () => {
    setIsDialogOpen(!isDialogOpen);
  };

  return (
    <>
      <Container sx={{ height: '100%' }}>
        <Container
          style={{
            height: '10%',
            display: 'flex',
            justifyContent: 'end'
          }}
        >
          <div
            onClick={() => setIsDialogOpen(true)}
            style={{
              width:'100%',
              height: '100%',
              cursor: 'pointer',
              display: 'flex',
              justifyContent: 'flex-end',
              textAlign: 'center',
              fontWeight: 500,
            }}
          > <AddIcon color="info" fontSize='medium' /> Add Inventory</div>
        </Container>
        <ScrollableContainer>
          {isLoading ? (
            <div style={{ width: '100%' }}>
              <Skeleton sx={{ width: '100%', bgcolor: '#8B9DC3', }} />
              <Skeleton sx={{ width: '100%', bgcolor: '#8B9DC3', }} animation="wave" />
              <Skeleton sx={{ width: '100%', bgcolor: '#8B9DC3', }} animation={false} />
              <Skeleton sx={{ width: '100%', bgcolor: '#8B9DC3', }} />
              <Skeleton sx={{ width: '100%', bgcolor: '#8B9DC3', }} animation="wave" />
              <Skeleton sx={{ width: '100%', bgcolor: '#8B9DC3', }} animation={false} />
              <Skeleton sx={{ width: '100%', bgcolor: '#8B9DC3', }} />
              <Skeleton sx={{ width: '100%', bgcolor: '#8B9DC3', }} animation="wave" />
              <Skeleton sx={{ width: '100%', bgcolor: '#8B9DC3', }} animation={false} />
            </div>
          ) : (
            <ScrollableContainer>
              <Container sx={{ height: '2em', width: '100%', borderBottom: '1px solid black', display: 'flex', justifyContent: 'space-between' }}>
                                <div style={{
                                    // border:'1px solid red',
                                    width: '15em',
                                    height: '95%%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between'
                                }}>
                                    <div style={{
                                        fontSize: '1.4rem',
                                        textTransform: 'capitalize',
                                        fontWeight: 600
                                    }}>Name</div>
                                    <div style={{
                                        fontSize: '1.4rem', fontWeight: 600
                                    }}>Quantity</div>
                                </div>
                            </Container>
              {items}
            </ScrollableContainer>
          )}

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
