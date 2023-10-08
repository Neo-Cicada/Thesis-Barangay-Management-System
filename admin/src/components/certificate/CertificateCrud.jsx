import React, { useState, useEffect } from 'react'
import AddIcon from '@mui/icons-material/Add';
import { Container, Skeleton } from '@mui/material'
import ScrollableContainer from '../ScrollableContainer';
import DashboardItem from '../DashboardItem';
import useRead from '../../hooks/useRead';
import CertificateAdd from './CertificateAdd'
export default function CertificateCrud() {
  const [data, setData] = useState([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);
  useRead('Certificates', setData);
  const handleDialogClose = () => {
    setIsDialogOpen(!isDialogOpen);
  };
  const items = data.map(item => <DashboardItem data={item} path="Certificates" name={item.type} />)
  return (
    <>
      <Container sx={{ height: '100%' }}>
        <Container
          style={{
            borderBottom: '1px solid black',
            height: '10%',
            display: 'flex',
            justifyContent: 'space-between'
          }}
        >
          <div>

          </div>
          <div
            onClick={() => setIsDialogOpen(true)}
            style={{
              height: '100%',
              cursor: 'pointer', width: '10em',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center'
            }}
          > <AddIcon /> Add Inventory</div>
        </Container>
        <ScrollableContainer>
          <Container style={{ display: 'flex', width: '100%', borderBottom: '1px solid black' }}>
            <div style={{
              width: '15em',
              height: '95%%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'

            }}>
              <div style={{ fontSize: '1.2rem' }}>Name</div>
              <div style={{ fontSize: '1.2rem' }}>Quantity</div>
            </div>


            <div></div>

          </Container>
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
              {items}
            </ScrollableContainer>
          )}

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
