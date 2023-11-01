import { Container, Box, Pagination, PaginationItem, Dialog, DialogContent, DialogTitle } from '@mui/material'
import React, { useState } from 'react'
import useRead from '../../hooks/useRead'
import useRecent from '../../hooks/useRecent'


export default function Resolution() {
    const [data, setData] = useState([]);
    const itemsPerPage = 2;
    useRecent("Resolutions", setData);
    const [currentPage, setCurrentPage] = useState(1);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = currentPage * itemsPerPage;
    const [open,setOpen] = useState(false)
    const [itemData, setItemData] = useState([])
    const items = data.map(item => (
        <>
            <tr key={item.id}>
                <td>{item.complainants}</td>
                <td>{item.defendants}</td>
                <td>{item.timestamp && item.timestamp.toDate().toLocaleString()}</td>
                <td onClick={(e)=>{setOpen(true), setItemData(item)}}>Review</td>
            </tr>
        </>
    ));

    // Calculate the index range of items to display on the current page
    const itemsToDisplay = items.slice(startIndex, endIndex);

    const handlePageChange = (event, page) => {
        setCurrentPage(page);
    };

    return (
        <>
            <Container>
                <table className="ResolutionTable">
                    <thead>
                        <tr>
                            <th>Complainants</th>
                            <th>Defendants</th>
                            <th>Time</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {itemsToDisplay}
                    </tbody>
                </table>
                {data.length > itemsPerPage && (
                    <div sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Pagination
                            size='small'
                            color='primary'
                            style={{
                                display: 'flex',
                                justifyContent: 'center'
                            }}
                            count={Math.ceil(data.length / itemsPerPage)}
                            page={currentPage}
                            onChange={handlePageChange}
                            renderItem={(item) => (
                                <PaginationItem
                                    component="a"
                                    href="#"
                                    {...item}
                                />
                            )}
                        />
                    </div>
                )}
            </Container>
            <Dialog open={open} onClose={() => setOpen(false)}>
                <DialogTitle>Information</DialogTitle>
                <DialogContent>
                    {itemData.complainants}
                </DialogContent>
            </Dialog>
        </>
    )
}
