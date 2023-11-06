import React, { useEffect, useContext, useState } from 'react'
import {
    Button, TextField, FormControl, Dialog,
    Checkbox, FormControlLabel, Box, Radio, FormLabel, RadioGroup, Typography
} from '@mui/material'
import { myGarbageContext } from './GarbageDialog'
import Agreement from '../../../components/dialogs/Agreement';
import GarbagSummary from './GarbagSummary';
import useUpload from '../../../hooks/useUpload';
import SnackBar from '../../SnackBar';
function TermsAndCondition({ open, onClose }) {
    return (
        <Dialog open={open} onClose={onClose}>
            {/* Innerx Dialog content */}
            <div>
                <Agreement />
                <Button onClick={onClose} color="primary">
                    Close
                </Button>
            </div>
        </Dialog>
    );
}
const Summary = ({ open, onClose }) => {
    const dialogStyle = {
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    };

    return (
        <Dialog open={open} onClose={onClose} fullWidth >
            <div style={dialogStyle}>
                <GarbagSummary />
                <Button onClick={onClose}>Close</Button>
            </div>
        </Dialog>
    );
};
export default function GarbageForm() {
    const { details, setDetails } = useContext(myGarbageContext)
    const [agreement, setAgreement] = useState(false)
    const [showSummary, setShowSummary] = useState(false)
    const [showAgreement, setShowAgreement] = useState(false)
    const [openSnack, setOpenSnack] = useState(false)


    const handleSubmit = async (e) => {
        e.preventDefault();
        await useUpload(details, "GarbageRequest")
        setDetails({
            fullname: '',
            email: '',
            phoneNumber: '',
            address: '',
            mop: 'Cash',
            status: 'request',
        })
        setOpenSnack(true)

    }
    return (
        <>
            <form style={{ maxWidth: '400px', margin: '0 auto' }} onSubmit={handleSubmit}>
                {/* fullname, phone number, email, address, mode of payment*/}
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1em',
                    marginTop: '1em',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>

                    <TextField
                        required
                        fullWidth
                        value={details.fullname}
                        label="Fullname"
                        error={!isNaN(details.fullname) && details.fullname !== ''}
                        helperText={"Required"}
                        onChange={(e) => setDetails({ ...details, fullname: e.target.value })}
                    />
                    <TextField
                        required
                        fullWidth
                        label="Phone Number"
                        placeholder="09..."
                        value={details.phoneNumber}
                        onChange={(e) => {
                            const onlyNums = e.target.value.replace(/[^0-9]/g, '');
                            if (onlyNums.length <= 11 || onlyNums === '') {
                                const number = onlyNums;
                                setDetails({ ...details, phoneNumber: number });
                            }
                        }}
                        error={details.phoneNumber !== '' && (!/^09/.test(details.phoneNumber) && details.phoneNumber.length < 2)}
                        helperText={details.phoneNumber !== '' && /^09/.test(details.phoneNumber) ? "Required" : "Phone number must start with '09'"}
                    />
                    <TextField
                        helperText="Optional"
                        fullWidth
                        variant="outlined"
                        label="Email address"
                        value={details.email}
                        onChange={(e) => setDetails({ ...details, email: e.target.value })}
                    />
                    <TextField
                        fullWidth
                        helperText="Required"
                        variant='outlined'
                        value={details.address}
                        onChange={(e) => setDetails({ ...details, address: e.target.value })}
                        label="Address"
                    />
                    <Box fullWidth style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Typography style={{ textAlign: 'center' }} fontSize={20}>A monthly payment of 100 pesos will be collected monthly</Typography>
                    </Box>
                    <FormControl>
                        <FormLabel sx={{ textAlign: 'center' }}>Mode of Payment</FormLabel>
                        <RadioGroup
                            defaultValue={"Cash"}
                            value={details.mop}
                            onChange={(e) => setDetails({ ...details, mop: e.target.value })}
                            row>
                            <FormControlLabel value="Cash" control={<Radio />} label="Cash" />
                            <FormControlLabel value="Gcash" control={<Radio />} label="Gcash" />
                        </RadioGroup>
                    </FormControl>
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginTop: '0.3em',
                        fontSize: '1.1rem',
                        color: 'red',
                        textDecoration: 'underline',
                        cursor: 'pointer'
                    }}>
                        <span onClick={() => setShowSummary(true)}>Review summary of informaton provided</span>        </Box>
                    <FormControlLabel
                        required
                        control={<Checkbox checked={agreement} />}
                        onClick={() => setAgreement(!agreement)}
                        label={
                            <span style={{ cursor: 'pointer' }}>
                                Agree to the <u onClick={() =>
                                    setShowAgreement(true)}>terms and conditions</u>
                            </span>
                        }
                    />
                    <Button
                        style={{ backgroundColor: '#3B5998', color: 'white', fontWeight: 'bold' }}
                        fullWidth
                        variant="contained"
                        disabled={!agreement}
                        type="submit"
                    >
                        {!agreement ? 'Disabled' : 'Submit'}</Button>
                </div>

            </form>
            <SnackBar open={openSnack} handleClose={() => setOpenSnack(false)} />
            <TermsAndCondition open={showAgreement} onClose={() => setShowAgreement(false)} />
            <Summary open={showSummary} onClose={() => setShowSummary(false)} />

        </>
    )
}
