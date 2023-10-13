import React, { useState } from 'react';
import DashboardHeader from '../DashboardHeader';
import ScrollableContainer from '../ScrollableContainer';
import { Pagination, PaginationItem } from '@mui/material';
import {Container} from '@mui/material'

export default function EquipmentAllRequest({ items }) {
  // Define the number of items per page
  const itemsPerPage = 3;

  // State to manage the current page
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the index range of items to display on the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = currentPage * itemsPerPage;

  // Slice the items array to get the items for the current page
  const itemsToDisplay = items.slice(startIndex, endIndex);

  // Function to handle page changes
  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <ScrollableContainer sx={{ overflowX: 'scroll' }}>
        <table style={{ tableLayout: 'auto', width: '100%', textAlign: 'center', overflowX: 'scroll' }}>
          <DashboardHeader />
          <tbody>
            {itemsToDisplay}
          </tbody>
        </table>
      </ScrollableContainer>
      {items.length > 3 && <div style={{ display: 'flex', justifyContent:'center',  }}>
        <Pagination
          size='small'
          color='primary'
          count={Math.ceil(items.length / itemsPerPage)}
          page={currentPage}
          onChange={handlePageChange}
          // shape="rounded"
          renderItem={(item) => (
            <PaginationItem
              component="a"
              href="#"
              {...item}
            />
          )}
        />
      </div>}
    </>
  );
}
