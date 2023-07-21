import React from 'react'
import { Form, Link } from 'react-router-dom'
import { Button, TextField, Divider, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material'
import '../../styles/equipManage.css'
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { useState, useEffect } from 'react';
import { collection, doc, setDoc, addDoc, QuerySnapshot, getDocs, deleteDoc, updateDoc } from "firebase/firestore";
import { db } from '../../firebase'

export default function EquipManage() {
    const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
    const [isRemoveDialogOpen, setIsRemoveDialogOpen] = useState(false);
    const [isUpdateDialogOpen, setIsUpdateDialogOpen] = useState(false);

    const [addItem, setAddItem] = useState('');
    const [quantity, setQuantity] = useState('');
    const itemCollection = collection(db, "Equipments");
    const [listedItems, setListedItems] = useState([]);
    const [id, setId] = useState('');
    const [newQuantity, setNewQuantity] = useState()

    const fetchData = async () => { // fetch data function
        try {
            const collectionRef = collection(db, 'Equipments'); // Select the path to the equipment
            const querySnapshot = await getDocs(collectionRef); // get all the data inside the path
            const newData = querySnapshot.docs.map((doc) => ({
                ...doc.data(),
                id: doc.id
            }));
            setListedItems(newData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => { // calls fetchData function
        fetchData();
    }, []);



    const onDelete = async (e) => { // Delete selected Equipment
        e.preventDefault();
        try {
            console.log(id)
            await deleteDoc(doc(db, "Equipments", id))
                .then(
                    setIsRemoveDialogOpen(true),
                    setId('')
                    );
        } catch (error) {
            console.log("cant removed", error)
        }

    }

    const onUpdate = async (e) => {
        e.preventDefault();
        const path = doc(db, "Equipments", id)
        console.log(id)
        try {
            await updateDoc(path, {
                Quantity: newQuantity
            }).then(
                setIsUpdateDialogOpen(true),
                setNewQuantity(''),
                setId('')

                )
        } catch (error) {
            console.log("Cant Update", error)
        }

    }

    const onSubmit = async (e) => { //Event on submit
        e.preventDefault();

        const newEquipment = {
            Equipment: addItem,
            Quantity: quantity
        };

        try {
            await addDoc(itemCollection, newEquipment);
            setIsAddDialogOpen(true);
            setAddItem('');
            setQuantity('');
        } catch (err) {
            alert(err.message);
        }
    };

    const handleDialogClose = () => {
        setIsAddDialogOpen(false); // Close the dialog
        setIsRemoveDialogOpen(false);
        setIsUpdateDialogOpen(false);
    };

    const renderedItems = listedItems.map((item) => ( // a component for MenuItem
        <MenuItem key={item.id} id={item.Equipment} value={item.id}>
            {item.Equipment}
        </MenuItem>
    ));

    const AddFormDialog = () => {
        return (<Dialog open={isAddDialogOpen} onClose={handleDialogClose}>
            <DialogTitle>Equipment Successfuly Added</DialogTitle>
            <DialogContent>
                <p>The item has been successfully added.</p>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleDialogClose} color="primary" autoFocus>
                    OK
                </Button>
            </DialogActions>
        </Dialog>)
    }
    const RemoveFormDialog = () =>{
        return(
            <Dialog open={isRemoveDialogOpen} onClose={handleDialogClose}>
                <DialogTitle>Equipment Successfuly Removed</DialogTitle>
                <DialogContent>
                    <p>The item has been successfully removed</p>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleDialogClose}>
                        OK
                    </Button>
                </DialogActions>
            </Dialog>
        )
    }

    const UpdateFormDialog = () =>{
        return(
            <Dialog open={isUpdateDialogOpen} onClose={handleDialogClose}>
                <DialogTitle>Equipment Successfuly Updated</DialogTitle>
                <DialogContent>
                    <p>The item has been successfully updated</p>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleDialogClose}>
                        OK
                    </Button>
                </DialogActions>
            </Dialog>
        )
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
                <form className='remove-item sameq' onSubmit={onDelete}>
                    <div className='item-label'>
                        Remove Item
                    </div>
                    <div>
                        <FormControl sx={{ width: '100%', maxWidth: '75%' }}>
                            <InputLabel id="demo-simple-select-helper-label">Select Item</InputLabel>
                            <Select
                                label='Select Item'
                                value={id}
                                onChange={(e) => {
                                    setId(e.target.value)
                                }}
                            >
                                {renderedItems}
                            </Select>
                        </FormControl>
                    </div>
                    <div>
                        {/* <TextField
                            sx={{ width: '100%', maxWidth: '75%' }}
                            label='Quantity'
                            type='number'
                        /> */}
                    </div>
                    <div>
                        <Button variant='contained' type='submit'>Done</Button>
                    </div>
                </form>
                <Divider />
                <form className='update-item sameq' onSubmit={onUpdate}>
                    <div className='item-label'>
                        Update Item
                    </div>
                    <div>
                        <FormControl sx={{ width: '100%', maxWidth: '75%' }}>
                            <InputLabel id="demo-simple-select-helper-label">Select Item</InputLabel>
                            <Select
                                label='Select Item'
                                value={id}
                                required
                                onChange={(e) => {
                                    setId(e.target.value)
                                }}
                            >
                                {renderedItems}
                            </Select>
                        </FormControl>
                    </div>
                    <div>
                        <TextField
                            sx={{ width: '100%', maxWidth: '75%' }}
                            label='Quantity'
                            type='number'
                            value={newQuantity}
                            required
                            onChange={(e) => {
                                setNewQuantity(e.target.value)
                            }}
                        />                    </div>
                    <div>
                        <Button variant='contained' size='big' type='submit'>Done</Button>
                    </div>
                </form>
            </div>

            <AddFormDialog/>
            <RemoveFormDialog/>
            <UpdateFormDialog/>
        </>
    )
}
