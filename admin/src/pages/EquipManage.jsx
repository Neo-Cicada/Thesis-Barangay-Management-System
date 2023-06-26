import React from 'react'
import { Form, Link } from 'react-router-dom'
import { Button, TextField, Divider, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material'
import '../styles/equipManage.css'
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { useState } from 'react';
import { collection, doc, setDoc, addDoc } from "firebase/firestore";
import { db } from '../firebase'

export default function EquipManage() {
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const [addItem, setAddItem] = useState('');
    const [quantity, setQuantity] = useState('');
    const [equipment, setEquipment] = useState({})
    const itemCollection = collection(db, "Equipments");
    const handleDialogClose = () => {
        setIsDialogOpen(false); // Close the dialog
    };
    const onSubmit = (e) => {
        e.preventDefault();
        setEquipment({
            ...equipment,
            Equipment: addItem,
            Quantity: quantity
        })
        addDoc(itemCollection, equipment).
            then(() => {
                setIsDialogOpen(true);
                setAddItem('')
                setQuantity('')
            }).catch((err) => {
                alert(err.message)
            })
    }

    return (
        <>
            <div className='equipManage-container'>
                <form className='add-item sameq' onSubmit={onSubmit}>
                    <div className='item-label'>
                        Add Item
                    </div>
                    <div>
                        <TextField
                            sx={{ width: '100%', maxWidth: '75%' }}
                            label='Equipment name'
                            value={addItem}
                            onChange={(e) => setAddItem(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <TextField
                            sx={{ width: '100%', maxWidth: '75%' }}
                            label='Quantity'
                            type='number'
                            value={quantity}
                            required
                            onChange={(e) => { setQuantity(e.target.value) }}
                        />
                    </div>
                    <div>
                        <Button variant='contained' type='submit'>Done</Button>
                    </div>
                </form>
                <Divider />
                <div className='remove-item sameq'>
                    <div className='item-label'>
                        Remove Item
                    </div>
                    <div>
                        <FormControl sx={{ width: '100%', maxWidth: '75%' }}>
                            <InputLabel id="demo-simple-select-helper-label">Select Item</InputLabel>
                            <Select
                                label='Select Item'
                            >
                                <MenuItem value={10}>Chair</MenuItem>
                                <MenuItem value={20}>Tent</MenuItem>
                                <MenuItem value={30}>Table</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                    <div>
                        <TextField
                            sx={{ width: '100%', maxWidth: '75%' }}
                            label='Quantity'
                            type='number'
                        />
                    </div>
                    <div>
                        <Button variant='contained'>Done</Button>
                    </div>
                </div>
                <Divider />
                <div className='update-item sameq'>
                    <div className='item-label'>
                        Update Item
                    </div>
                    <div>
                        <FormControl sx={{ width: '100%', maxWidth: '75%' }}>
                            <InputLabel id="demo-simple-select-helper-label">Select Item</InputLabel>
                            <Select
                                label='Select Item'
                            >
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                    <div>
                        <TextField
                            sx={{ width: '100%', maxWidth: '75%' }}
                            label='Quantity'
                            type='number'
                        />                    </div>
                    <div>
                        <Button variant='contained' size='big'>Done</Button>
                    </div>
                </div>
            </div>
            <Dialog open={isDialogOpen} onClose={handleDialogClose}>
                <DialogTitle>Equipment Successfuly Added</DialogTitle>
                <DialogContent>
                    <p>The item has been successfully added.</p>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleDialogClose} color="primary" autoFocus>
                        OK
                    </Button>
                </DialogActions>
            </Dialog>

        </>
    )
}
