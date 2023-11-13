import React, { useState } from 'react'
import {
  Dialog, DialogTitle, DialogContent,
  DialogActions, Button, TextField, Box, FormControl, Select, MenuItem, InputLabel
} from '@mui/material'
import useUpdatePayment from '../../hooks/useUpdatePayment'
import useStatusUpdate from '../../hooks/useStatusUpdate'
import ConfirmationDialog from '../ConfirmationDialog'
import RedToast from '../RedToast'
export default function GarbagePayment({ open, onClose, item }) {
  const [paymentMethod, setPaymentMethod] = useState("Cash")
  const [month, setMonth] = useState(null)
  const [amount, setAmount] = useState(null)
  const [details, setDetails] = useState([])
  const [confirmation, setConfirmation] = useState(false)
  const [toast, setToast] = useState(false);
  const paymentDetails = [{
    paymentMethod: paymentMethod,
    month: month,
    amount: amount
  }]
  const handleSubscription = async (e) => {
    e.preventDefault();
    await useStatusUpdate("GarbageRequest", item.id, "rejected")
  }
  const handleAddPayment = async (e) => {
    e.preventDefault();
    await useUpdatePayment("GarbageRequest", item.id, paymentDetails).then(
      console.log("Success updated Garbage")
    )
    setAmount("")
    setMonth("")
    setPaymentMethod("Cash")
    setToast(true)
  }
  return (
    <>
      <Dialog fullWidth open={open} onClose={onClose}>
        <DialogTitle sx={{ textAlign: 'center' }}>
          <h2 style={{
            textTransform: 'capitalize',
            color: '#3B5998',
            fontWeight: 500,
          }}>  MANAGE <span style={{ textTransform: "uppercase" }}>{item.fullname}</span> PAYMENT </h2>
        </DialogTitle>
        <DialogContent fullWidth>
          <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
            <Box sx={{ marginTop: "1em", display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
              <TextField
                sx={{ width: '30%' }}
                type='month'
                label="Date"
                value={month}
                onChange={(e) => setMonth(e.target.value)}
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <TextField
                sx={{ width: '25%' }}
                type='number'
                value={amount}
                label="Amount"
                onChange={(e) => setAmount(e.target.value)}
              />
              <FormControl
                sx={{ width: '25%' }}>
                <InputLabel>Payment</InputLabel>
                <Select
                  label="Payment Method"
                  defaultValue={"Cash"}
                  value={paymentMethod}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                >
                  <MenuItem value={"Cash"}>Cash</MenuItem>
                  <MenuItem value="Gcash">Gcash</MenuItem>

                </Select>
              </FormControl>
              <Button
                disabled={!month || !amount || !paymentMethod}
                variant='contained' size='small' onClick={handleAddPayment}>Submit
              </Button>
            </Box>
            <Box sx={{ textAlign: 'center', display: 'flex', flexDirection: 'column' }}>
              <p>{item.fullname} Payment History</p>
              <Box sx={{ border: '1px solid black' }}>

                {item.paymentDetails ? item.paymentDetails.map(paymentDetail => {
                  const [year, month] = paymentDetail.month.split('-');
                  const formattedDate = new Date(year, month - 1).toLocaleString('en-US', { month: 'long', year: 'numeric' });

                  return (
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid black' }}>
                      <p style={{ width: '35%' }}>Date of Subscription {formattedDate}</p>
                      <p style={{ width: '20%' }}>Amount: {paymentDetail.amount}</p>
                      <p style={{ width: '40%' }}>Mode of Payment: {paymentDetail.paymentMethod}</p>
                    </Box>
                  );
                }) : "No data"}

              </Box>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '1em' }}>
              <Button

                variant='contained'
                onClick={() => setConfirmation(true)}>
                Cancel Subscription</Button>
            </Box>
          </Box>

        </DialogContent>
        <DialogActions >
          <Button variant='contained' onClick={onClose}>Close</Button>
        </DialogActions>
      </Dialog>
      <ConfirmationDialog
        open={confirmation}
        onClose={() => setConfirmation(false)}
        title={`Cancel Garbage Collection Subscription`}
        onConfirm={handleSubscription}
        message={`Do you want to cancel ${item.fullname} Garbage Collection Subscription? `}
      />
      <RedToast open={toast} onClose={()=>setToast(false)} content='payment successfuly added!' type='success' />

    </>
  )
}
