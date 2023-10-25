import React, { useState, useEffect } from 'react';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CloseIcon from '@mui/icons-material/Close';
import { Alert } from '@mui/material';

function RedToast({ open, onClose, content = "Cancelled!", type = "error" }) {
  const [autoHideDuration, setAutoHideDuration] = useState(1500);

  useEffect(() => {
    if (open) {
      const timer = setTimeout(() => {
        onClose();
      }, autoHideDuration);
      return () => clearTimeout(timer);
    }
  }, [open, onClose, autoHideDuration]);

  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      open={open}
      autoHideDuration={autoHideDuration}
      onClose={onClose}
    >
      <Alert
        onClose={() => setOpenSnack(false)}
        severity={type}
        sx={{
          width: '100%',
          fontWeight: "bold",
          height: 'auto',
          fontSize: '1.2rem',
          padding: '1em',
        }}
      >
        {content}
      </Alert>
    </Snackbar>
  );
}

export default RedToast;
