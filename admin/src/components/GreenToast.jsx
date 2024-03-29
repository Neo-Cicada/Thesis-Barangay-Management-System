import React, { useState, useEffect } from 'react';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CloseIcon from '@mui/icons-material/Close';

function GreenToast({ delay, onClose, content="" }) {
  const [open, setOpen] = useState(false);
  const [autoHideDuration, setAutoHideDuration] = useState(2500);

  useEffect(() => {
    if (delay) {
      const timer = setTimeout(() => {
        setOpen(true);
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [delay]);

  useEffect(() => {
    if (open) {
      const timer = setTimeout(() => {
        onClose();
        setOpen(false); // Close the toast after a certain time
      }, autoHideDuration);
      return () => clearTimeout(timer);
    }
  }, [open, onClose, autoHideDuration]);

  return (
    <Snackbar
      open={open}
      autoHideDuration={autoHideDuration}
      onClose={onClose}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
    >
      <div style={{ backgroundColor: 'green', color: 'white', padding: '12px', display: 'flex', alignItems: 'center' }}>
        <CheckCircleIcon style={{ marginRight: '8px' }} />
        Successful!
        <IconButton size="small" aria-label="close" color="inherit" onClick={onClose}>
          <CloseIcon fontSize="small" />
        </IconButton>
      </div>
    </Snackbar>
  );
}

export default GreenToast;
