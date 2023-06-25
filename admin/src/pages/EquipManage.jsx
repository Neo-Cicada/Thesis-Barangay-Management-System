import React from 'react'
import { Form, Link } from 'react-router-dom'
import { Button, TextField, Divider } from '@mui/material'
import '../styles/equipManage.css'
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
export default function EquipManage() {
    return (
        <>
            <div className='equipManage-container'>
                <div className='add-item sameq'>
                    <div className='item-label'>
                        Add Item
                    </div>
                    <div>
                        <TextField
                            sx={{ width: '100%', maxWidth: '75%' }}
                            label='Equipment name'
                        />
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
        </>
    )
}
