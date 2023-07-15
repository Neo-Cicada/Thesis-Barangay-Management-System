import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
export default function FormMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        variant='outlined'
      >
        Form Lists
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}><Link to="certificate-request-form">Certificate Request Form</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link to="enrollment-request-form">Enrollment Request Form</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link to="facility-request-form">Facility Request Form</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link to="medicine-request-form">Medicine Request Form</Link></MenuItem>

      </Menu>
    </div>

  );
}