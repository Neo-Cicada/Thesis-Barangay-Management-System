import React, { useState } from 'react';
import { TextField, Radio, RadioGroup, FormControlLabel, FormControl, Button, Checkbox } from '@mui/material';

export default function ReportForm() {
  const [reportType, setReportType] = useState('anonymous');
  const [formData, setFormData] = useState({
    name: '',
    number: '',
    email: '',
    summon: false,
  });

  const handleRadioChange = (event) => {
    setReportType(event.target.value);
  };

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission, you can access formData here
    console.log('Form Data:', formData);
  };

  return (
    <div style={{  padding: '16px', maxWidth: '400px', margin: '0 auto' }}>
      <form onSubmit={handleSubmit}>
        <FormControl component="fieldset">
          <RadioGroup row   aria-label="reportType" name="reportType" value={reportType} onChange={handleRadioChange}>
            <FormControlLabel value="anonymous" control={<Radio />} label="Anonymous Report" />
            <FormControlLabel value="personal" control={<Radio />} label="Personal Information" />
          </RadioGroup>
        </FormControl>

        <TextField
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          fullWidth
          required
          margin="normal"
          disabled={reportType === 'anonymous'}
        />
        <TextField
          label="Number"
          name="number"
          value={formData.number}
          onChange={handleChange}
          fullWidth
          required
          margin="normal"
          disabled={reportType === 'anonymous'}
        />
        <TextField
          label="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          fullWidth
          required
          margin="normal"
          disabled={reportType === 'anonymous'}
        />
        <FormControlLabel
          control={
            <Checkbox
              name="summon"
              checked={formData.summon}
              onChange={handleChange}
              color="primary"
              disabled={reportType === 'anonymous'}
            />
          }
          label="Summon the person being reported"
        />

        {/* <Button type="submit" variant="contained" color="primary" disabled={reportType === 'anonymous'}>
          Submit
        </Button> */}
      </form>
    </div>
  );
}
