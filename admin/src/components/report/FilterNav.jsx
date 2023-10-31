import React, { useState, useEffect } from 'react'
import { Container, Skeleton, TextField, MenuItem, Select, FormControl, InputLabel, Box } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';

export default function FilterNav({setWho, setSelectedMonth, setSearchQuery, who, selectedMonth}) {
    const normal = {
        borderRadius: '1em',
        padding: '0px 5px 0px 5px',
        background: '#F5F5F5',
        color: "black",
        fontWeight: 500,
        cursor: 'pointer'
      }
      const active = {
        borderRadius: '1em',
        padding: '0px 5px 0px 5px',
        background: '#DFE3EE',
        color: "#3B5998",
        fontWeight: 500,
        cursor: 'pointer'
      }
    return (
        <>
            <Container sx={{ display: 'flex', justifyContent: 'space-between', marginTop: '0.5em' }}>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}> <TextField
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder='Search'
                        size='small' /> <SearchIcon fontSize='large' /> </Box>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1em' }}>
                    <div style={who === "complainants" ? active : normal}
                        onClick={() => setWho("complainants")}
                    >Complainants</div>
                    <div
                        style={who === "defendants" ? active : normal}
                        onClick={() => setWho("defendants")}

                    >Defendants</div>
                </div>
                <div style={{ width: '20%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <FormControl fullWidth>
                        <InputLabel>Filter By Month</InputLabel>
                        <Select
                            fillWidth
                            size='small'
                            value={selectedMonth}
                            label="Filter By Month"
                            onChange={(e) => setSelectedMonth(e.target.value)}
                        >
                            <MenuItem value={null}>None</MenuItem>
                            <MenuItem value={0}>January</MenuItem>
                            <MenuItem value={1}>Febuary</MenuItem>
                            <MenuItem value={2}>March</MenuItem>
                            <MenuItem value={3}>April</MenuItem>
                            <MenuItem value={4}>May</MenuItem>
                            <MenuItem value={5}>June</MenuItem>
                            <MenuItem value={6}>July</MenuItem>
                            <MenuItem value={7}>August</MenuItem>
                            <MenuItem value={8}>September</MenuItem>
                            <MenuItem value={9}>October</MenuItem>
                            <MenuItem value={10}>November</MenuItem>
                            <MenuItem value={11}>December</MenuItem>


                        </Select>
                    </FormControl></div>
            </Container>
        </>
    )
}
