import React, { useState, useEffect } from 'react'
import { Container, Box, TextField } from '@mui/material'
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
    const [desiredMonthYear, setDesiredMonthYear] = useState("")
    const [paymentStatus, setPaymentStatus] = useState("paid")
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
        .filter(item => {
            if (paymentStatus === "paid") {
                return item.paymentDetails
                    ? !desiredMonthYear || item.paymentDetails.some(paymentDetail => paymentDetail.month === desiredMonthYear)
                    : false; // Exclude items without paymentDetails from "paid"
            } else if (paymentStatus === "unpaid") {
                return item.paymentDetails
                    ? !desiredMonthYear || !item.paymentDetails.some(paymentDetail => paymentDetail.month === desiredMonthYear)
                    : true; // Include items without paymentDetails in "unpaid"
            }
        })
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

    const normal = {
        borderRadius: '1em',
        padding: '0px 5px 0px 5px',
        background: '#F5F5F5',
        color: "black",
        fontWeight: 500,
        cursor: 'pointer',
        width: '5em',
        textAlign: 'center'

    }
    const active = {
        borderRadius: '1em',
        padding: '0px 5px 0px 5px',
        background: '#DFE3EE',
        color: "#3B5998",
        fontWeight: 500,
        cursor: 'pointer',
        width: '5em',
        textAlign: 'center'
    }

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
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Filter setSearchQuery={setSearchQuery} />
                    {status === "second" && <>
                        <TextField
                            type='month'
                            size='small'
                            value={desiredMonthYear}
                            onChange={(e) => setDesiredMonthYear(e.target.value)}
                            sx={{ marginRight: '1em', width: '20em' }}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                        <Box sx={{
                            display: 'flex', gap: '1em', paddingRight: '2em',
                            justifyContent: 'center', alignItems: 'center'
                        }}>
                            <Box style={paymentStatus === "paid" ? active : normal}
                                onClick={(e) => setPaymentStatus("paid")}
                            >
                                <p>Paid</p>
                            </Box>
                            <Box
                                style={paymentStatus === "unpaid" ? active : normal}
                                onClick={(e) => setPaymentStatus("unpaid")}
                            >
                                <p>Unpaid</p>
                            </Box>
                        </Box>
                    </>}</Box>
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
