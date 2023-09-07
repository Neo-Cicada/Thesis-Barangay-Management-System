import React from 'react'
import { useState } from 'react'

export default function DashboardNavigation() {
    const [status, setStatus] = useState("default")
    const btnStyle = {
        border: '0',
        background: 'none',
        borderRadius: '0px',
        fontSize: '1.1rem',
        cursor: 'pointer',
        borderBottom: 'none'
    }
    const activeBtn = {
        border: '0',
        background: 'none',
        borderRadius: '0px',
        fontSize: '1.1rem',
        cursor: 'pointer',
        borderBottom: '5px solid black'
    }
    return (
        <>
            <div style={{ borderBottom: '2px solid #868686', display: 'flex', gap: '1.5em' }}>
                <button
                    style={status === 'default' ? activeBtn : btnStyle}
                    onClick={() => setStatus("default")}

                >
                    All request</button>
                <button
                    style={status === 'second' ? activeBtn : btnStyle}
                    onClick={() => setStatus("second")}>Ongoing</button>
                <button
                    style={status === 'third' ? activeBtn : btnStyle}
                    onClick={() => setStatus("third")}>Accepted</button>
                <button
                    style={status === 'fourth' ? activeBtn : btnStyle}
                    onClick={() => setStatus("fourth")}>Rejected</button>
                <button
                    style={status === 'fifth' ? activeBtn : btnStyle}
                    onClick={() => setStatus("fifth")}>Inventory</button>
            </div>
        </>
    )
}
