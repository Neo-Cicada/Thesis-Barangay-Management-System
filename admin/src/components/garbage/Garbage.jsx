import React, { useState, useEffect } from 'react'
import { Container, Box } from '@mui/material'
import DashboardBox from '../DashboardBox'
import ChecklistIcon from '@mui/icons-material/Checklist';
import GarbageDashNav from './GarbageDashNav';
import Filter from '../Filter';
import Loading from '../Loading';
import EquipmentAllRequest from '../equipment/EquipmentAllRequest';
import useRecent from '../../hooks/useRecent'
import useRead from '../../hooks/useRead'
import DashboardListGarbage from './DashboardListGarbage';
export default function Garbage() {
    const [data, setData] = useState([])
    const [status, setStatus] = useState('default')
    const [isLoading, setIsLoading] = useState(true)
    const [searchQuery, setSearchQuery] = useState("")
    useRecent('GarbageRequest', setData)
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1500);

        return () => clearTimeout(timer);
    }, []);
    console.log(data)
    const items = data.filter(item => item.status === "request")
        .filter(item => !searchQuery || item.fullname.toLowerCase().includes(searchQuery.toLowerCase()))
        .sort((a, b) => (b.timestamp && a.timestamp ? b.timestamp.toDate() - a.timestamp.toDate() : 0))
        .map(item => <DashboardListGarbage
            key={item.id}
            item={item}
            first={item.fullname}
            second={item.email}
            third={item.phoneNumber}
            fourth={item.timestamp ? item.timestamp.toDate().toLocaleString() : 'No timestamp'}
            seventh={item.status}
            path={'GarbageRequest'}
            status={"request"}

        />)
    const ongoingItems = data.filter(item => item.status === "ongoing")
        .filter(item => !searchQuery || item.fullname.toLowerCase().includes(searchQuery.toLowerCase()))
        .sort((a, b) => (b.timestamp && a.timestamp ? b.timestamp.toDate() - a.timestamp.toDate() : 0))
        .map(item => <DashboardListGarbage
            key={item.id}
            item={item}
            first={item.fullname}
            second={item.email}
            third={item.phoneNumber}
            fourth={item.timestamp ? item.timestamp.toDate().toLocaleString() : 'No timestamp'}
            seventh={item.status}
            path={'GarbageRequest'}
            status={"ongoing"}
        />)
    const cancelledItems = data.filter(item => item.status === "rejected")
        .filter(item => !searchQuery || item.fullname.toLowerCase().includes(searchQuery.toLowerCase()))
        .sort((a, b) => (b.timestamp && a.timestamp ? b.timestamp.toDate() - a.timestamp.toDate() : 0))
        .map((item) => <DashboardListGarbage

            fourth={item.timestamp ? item.timestamp.toDate().toLocaleString() : 'No timestamp'}
            seventh={item.status}

        />)

    return (
        <>
            <div className='equipment-container'>
                <Container style={{ height: '30%', display: 'flex', flexDirection: 'column', gap: '1em' }}>
                    <div className='manageEquipment-title'>
                        <h3 style={{ fontSize: '2rem', fontWeight: "bold", color: '#3B5998' }}>Manage Garbage Collection</h3>
                    </div>
                    <Box className="equipmentDashboardBoxes" sx={{ display: 'flex', justifyContent: 'space-around' }}>

                        <DashboardBox
                            name="Request"
                            numbers={items.length}
                            logo={<ChecklistIcon />} />
                        <DashboardBox
                            name="Ongoing"
                            numbers={ongoingItems.length}
                            logo={<ChecklistIcon />} />
                        <DashboardBox
                            name="Cancelled"
                            numbers={cancelledItems.length}
                            logo={<ChecklistIcon />} />

                    </Box>
                </Container>
                <GarbageDashNav setStatus={setStatus} status={status} />
                <Filter setSearchQuery={setSearchQuery} />
                {isLoading ? (
                    <Loading />

                ) : (
                    <div sx={{ border: '1px solid red', minHeight: '70%' }}>
                        <div sx={{ border: '1px solid red', minHeight: '70%' }}>
                            {status === "default" && <EquipmentAllRequest items={items} />}
                            {status === "second" && <EquipmentAllRequest items={ongoingItems} />}
                            {status === "third" && <EquipmentAllRequest items={cancelledItems} />}
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}
