import React, { useState } from 'react';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import DashboardConfirmation from './DashboardConfirmation';
import useStatusUpdate from '../hooks/useStatusUpdate'
export default function DashboardList({ first, second, third, fourth, fifth,
  sixth, seventh, itemId }) {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };
  const onAccept = async (e) => {
    e.stopPropagation();
    await useStatusUpdate('EquipmentAllRequest', itemId, 'accepted')
    console.log(itemId)
  }
  const onDecline = (e) => {
    e.stopPropagation();
    console.log('Equipment onDecline')
  }
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
        <div style={{ width: '18%', textAlign:'center' }}>{first}</div>
        <div style={{ width: '20%',  textAlign:'center' }}>{second}</div>
        <div style={{ width: '10%',  textAlign:'center' }}>{third}</div>
        <div style={{ width: '12.5%', textAlign:'center'  }}>{fourth}</div>
        <div style={{ width: '6%', textAlign:'center'  }}>{fifth}</div>
        <div style={{ width: '12.5%',  textAlign:'center' }}>{sixth}</div>
        <div style={{ width: '12.5%', textAlign:'center'  }}>{seventh}</div>
        <div style={{ width: '5%', cursor: 'pointer', display: 'flex' }} onClick={togglePopup}>
          <MoreHorizIcon />
          {isPopupOpen && <DashboardConfirmation accept={onAccept} reject={onDecline} />}

        </div>
      </div>
    </>
  );
}
