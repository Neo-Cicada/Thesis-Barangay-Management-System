import React, { useState } from 'react';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import DashboardConfirmation from './DashboardConfirmation';

export default function DashboardList({ first, second, third, fourth, fifth, sixth, seventh }) {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <>
      <div
        style={{
          borderBottom: '1px solid black',
          height: '2em',
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <div style={{ width: '12.5%' }}>{first}</div>
        <div style={{ width: '12.5%' }}>{second}</div>
        <div style={{ width: '12.5%' }}>{third}</div>
        <div style={{ width: '12.5%' }}>{fourth}</div>
        <div style={{ width: '12.5%' }}>{fifth}</div>
        <div style={{ width: '12.5%' }}>{sixth}</div>
        <div style={{ width: '12.5%' }}>{seventh}</div>
        <div style={{ width: '12.5%', cursor: 'pointer', display:'flex' }} onClick={togglePopup}>
          <MoreHorizIcon />
          {isPopupOpen && <DashboardConfirmation />}

        </div>
      </div>
    </>
  );
}
