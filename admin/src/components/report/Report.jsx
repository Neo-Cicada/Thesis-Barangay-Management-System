import React, { useState, useEffect } from 'react'
import { Container, Skeleton, TextField, MenuItem, Select, FormControl, InputLabel, Box } from '@mui/material'
import ChecklistIcon from '@mui/icons-material/Checklist'
import DashboardBox from '../DashboardBox'
import DashboardNavigation from '../DashboardNavigation'
import SearchIcon from '@mui/icons-material/Search';
import EquipmentAllRequest from '../equipment/EquipmentAllRequest'
import useRead from '../../hooks/useRead'
import Loading from '../Loading'
import DashboardListRep from './DashboardListRep'
import DashRepNav from './DashRepNav'
import FilterNav from './FilterNav'
export default function Report() {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true);
  const [status, setStatus] = useState('default')
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedMonth, setSelectedMonth] = useState(null);
  const [who, setWho] = useState("complainants")
  useRead('ReportRequest', setData)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);


  const items = data
    .filter(item => item.status === "request")
    .filter(item => {
      if (who === "defendants") {
        const persons = item.selectedReport.map(selectedItem => selectedItem.person.toLowerCase());
        return !searchQuery || persons.some(person => person.includes(searchQuery.toLowerCase()));
      } else {
        return !searchQuery || item.fullname.toLowerCase().includes(searchQuery.toLowerCase());
      }
    })
    .filter(item => {
      if (selectedMonth !== null) {
        if (!item.timestamp) {
          return false; // Ignore items with no timestamp
        }

        const itemMonth = item.timestamp.toDate().getMonth(); // Get the month (0-11)
        return itemMonth === selectedMonth;
      }

      return true; // No filtering if selectedMonth is null
    })
    .sort((a, b) => (b.timestamp && a.timestamp ? b.timestamp.toDate() - a.timestamp.toDate() : 0))
    .map(item => <DashboardListRep
      key={item.id}
      item={item}
      first={who === "defendants" ? item.selectedReport.map(item => item.person) : item.fullname}
      second={item.email}
      third={item.phoneNumber}
      fourth={item.timestamp ? item.timestamp.toDate().toLocaleString() : 'No timestamp'}
      seventh={item.status}
      path={'ReportRequest'}
      status={"request"}
    />)
  const ongoingItems = data
    .filter(item => item.status === "ongoing")
    .filter(item => {
      if (who === "defendants") {
        const persons = item.selectedReport.map(selectedItem => selectedItem.person.toLowerCase());
        return !searchQuery || persons.some(person => person.includes(searchQuery.toLowerCase()));
      } else {
        return !searchQuery || item.fullname.toLowerCase().includes(searchQuery.toLowerCase());
      }
    })
    .filter(item => {
      if (selectedMonth !== null) {
        if (!item.timestamp) {
          return false; // Ignore items with no timestamp
        }

        const itemMonth = item.timestamp.toDate().getMonth(); // Get the month (0-11)
        return itemMonth === selectedMonth;
      }

      return true; // No filtering if selectedMonth is null
    })
    .sort((a, b) => (b.timestamp && a.timestamp ? b.timestamp.toDate() - a.timestamp.toDate() : 0))
    .map(item => (
      <DashboardListRep
        key={item.id}
        item={item}
        first={who === "defendants" ? item.selectedReport.map(item => item.person) : item.fullname}
        second={item.email}
        third={item.phoneNumber}
        fourth={item.timestamp ? item.timestamp.toDate().toLocaleString() : 'No timestamp'}
        seventh={item.status}
        path={'ReportRequest'}
        status={"ongoing"}
      />
    ));
  const acceptedItems = data
    .filter(item => item.status === "accepted")
    .filter(item => {
      if (who === "defendants") {
        const persons = item.selectedReport.map(selectedItem => selectedItem.person.toLowerCase());
        return !searchQuery || persons.some(person => person.includes(searchQuery.toLowerCase()));
      } else {
        return !searchQuery || item.fullname.toLowerCase().includes(searchQuery.toLowerCase());
      }
    })
    .filter(item => {
      if (selectedMonth !== null) {
        if (!item.timestamp) {
          return false; // Ignore items with no timestamp
        }

        const itemMonth = item.timestamp.toDate().getMonth(); // Get the month (0-11)
        return itemMonth === selectedMonth;
      }

      return true; // No filtering if selectedMonth is null
    })
    .sort((a, b) => (b.timestamp && a.timestamp ? b.timestamp.toDate() - a.timestamp.toDate() : 0))
    .map(item => <DashboardListRep
      key={item.id}
      item={item}
      first={who === "defendants" ? item.selectedReport.map(item => item.person) : item.fullname}
      second={item.email}
      third={item.phoneNumber}
      fourth={item.timestamp ? item.timestamp.toDate().toLocaleString() : 'No timestamp'}
      seventh={item.status}
      path={'ReportRequest'}
      status={"accepted"}
    />)
  const rejectedItems = data
    .filter(item => item.status === "rejected")
    .filter(item => {
      if (who === "defendants") {
        const persons = item.selectedReport.map(selectedItem => selectedItem.person.toLowerCase());
        return !searchQuery || persons.some(person => person.includes(searchQuery.toLowerCase()));
      } else {
        return !searchQuery || item.fullname.toLowerCase().includes(searchQuery.toLowerCase());
      }
    })
    .filter(item => {
      if (selectedMonth !== null) {
        if (!item.timestamp) {
          return false; // Ignore items with no timestamp
        }

        const itemMonth = item.timestamp.toDate().getMonth(); // Get the month (0-11)
        return itemMonth === selectedMonth;
      }

      return true; // No filtering if selectedMonth is null
    })
    .sort((a, b) => (b.timestamp && a.timestamp ? b.timestamp.toDate() - a.timestamp.toDate() : 0))
    .map(item => <DashboardListRep
      key={item.id}
      item={item}
      first={who === "defendants" ? item.selectedReport.map(item => item.person) : item.fullname}
      second={item.email}
      third={item.phoneNumber}
      fourth={item.timestamp ? item.timestamp.toDate().toLocaleString() : 'No timestamp'}
      seventh={item.status}
      path={'ReportRequest'}
      status={"rejected"}
    />)
  return (

    <div className='equipment-container'>
      <Container style={{
        height: '30%', display: 'flex',
        flexDirection: 'column', gap: '1em',
      }}>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <h3 style={{ fontSize: '2rem', fontWeight: "bold", color: '#3B5998' }}>Manage Complaints</h3>
        </div>
        <div style={{ display: 'flex', gap: '1em', justifyContent: 'space-around' }}>
          <DashboardBox
            name="Total"
            numbers={items.length}
            logo={<ChecklistIcon />} />
          <DashboardBox
            name="Ongoing"
            numbers={ongoingItems.length}
            logo={<ChecklistIcon />} />
          <DashboardBox
            name="Completed"
            numbers={acceptedItems.length}
            logo={<ChecklistIcon />} />
          <DashboardBox
            name="Rejected"
            numbers={rejectedItems.length}
            logo={<ChecklistIcon />} />
        </div>

      </Container>
      <DashRepNav setStatus={setStatus} status={status} />
      {/* Filter Nav here */}
      {status === "fifth" ?
        <Container sx={{display:'flex', justifyContent:'flex-end', gap:'1em'}}>
          <div>UPLOAD RESOLUTION</div>
          <div>CREATE RESOLUTION</div>
        </Container> : <FilterNav
          setSearchQuery={setSearchQuery}
          setWho={setWho}
          who={who}
          selectedMonth={selectedMonth}
          setSelectedMonth={setSelectedMonth} />}
      {isLoading ? (
        <Loading />

      ) : (
        <div sx={{ border: '1px solid red', height: '70%' }}>
          {status === "default" && <EquipmentAllRequest items={items} />}
          {status === "second" && <EquipmentAllRequest items={ongoingItems} />}
          {status === "third" && <EquipmentAllRequest items={acceptedItems} />}
          {status === "fourth" && <EquipmentAllRequest items={rejectedItems} />}
        </div>)}

    </div>
  )
}
