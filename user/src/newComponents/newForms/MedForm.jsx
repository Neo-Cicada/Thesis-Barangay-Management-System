import React, { createContext, useContext, useState } from 'react';
import { TextField,Box, FormControlLabel, Checkbox} from '@mui/material'
import { MyContext } from './MedicineDialogForm'
export default function MedForm() {
    const { selectedMedicines } = useContext(MyContext);
    const [formData, setFormData] = useState({

    })
  return (
    <>
      
       <div style={{
        height:'100%',
        display:'flex',
        flexDirection:'column',
        gap:'1em',
        marginTop:'1em'}}>
            <TextField label="Fullname"/>
            <TextField
            label="Phone Number"
            placeholder="09..."
            />
            <TextField
              variant="outlined"
              label="Email address"/>
               <Box sx={{
          display: 'flex', alignItems: 'center',
          justifyContent: 'center', marginTop: '0.3em',
          fontSize: '1.1rem', color: 'red', textDecoration: 'underline',
          cursor: 'pointer'
        }} >
          <span>Review summary of informaton provided</span>
        </Box>
        <FormControlLabel
            required
            control={<Checkbox />}
            label={
              <span >
                Agree to the <u>terms and conditions</u>
              </span>
            }
          />
       </div>
      
    </>
  )
}
