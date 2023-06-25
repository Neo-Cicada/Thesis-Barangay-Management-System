import React from 'react'
import { Link } from 'react-router-dom'
import { Button, TextField } from '@mui/material'
import '../styles/equipManage.css'
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
                            label='Equipment name'
                        />
                    </div>
                    <div>
                        <TextField
                            label='Quantity'
                            type='number'
                        />
                    </div>
                    <div>
                        <Button variant='contained'>Done</Button>
                    </div>
                </div>

                <div className='remove-item sameq'>
                    <div className='item-label'>
                        Remove Item
                    </div>
                    <div>
                        <TextField
                            label='Equipment name'
                        />
                    </div>
                    <div>
                        <TextField
                            label='Quantity'
                            type='number'
                        />
                    </div>
                    <div>
                        <Button variant='contained'>Done</Button>
                    </div>
                </div>
                <div className='update-item sameq'>
                    <div className='item-label'>
                        Update Item
                    </div>
                    <div>
                        <TextField
                            label='Equipment name'
                        />
                    </div>
                    <div>
                        <TextField
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
