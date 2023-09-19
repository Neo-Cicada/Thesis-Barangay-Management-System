import React from 'react'
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Box } from '@mui/material'

export default function EquipmentViewInformation({ item,  open, onClose, onConfirm, title, message  }) {
    return (
        <>
            <Dialog open={open} onClose={onClose}>
                <DialogTitle>
                    Lord Neo Barnachea Full information
                </DialogTitle>
                <DialogContent>
                    age: 21
                    blah blac
                    <Box>Lorem ipsum dolor sit amet consectetur,</Box>
                    <Box>adipisicing elit. Officiis voluptatibus dolorum accusantium deserunt ad reprehenderit, aspernatur dolor omnis veritatis voluptas,
                        ex magnam totam </Box>

                    <Box> quia obcaecati vel alias incidunt repudiandae doloremque?</Box>
                </DialogContent>
            </Dialog>
        </>
    )
}
