import React, { useContext } from 'react'
import { MyCertContext } from './CertificateDialog'
export default function CertSummary() {
    const { details } = useContext(MyCertContext)
    return (
        <>
            <div style={{ width: '80%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{borderBottom: '2px dashed grey'}}>
                    <h2 style={{ textAlign: 'center' }}>
                        Personal Information</h2>
                    <div>
                        <p>Full Name: {details.fullname}</p>
                        <p>Phone Number:{details.phoneNumber}</p>
                        <p>Email:{details.email}</p>
                    </div>
                </div>
                <div>
                    <h2 style={{ textAlign: 'center' }}>
                        Selected Certificate</h2>
                    <div>
                        {details.selectedCertificates.map(item => <p>name: {item.name}</p>)}
                    </div>
                </div>
            </div>
        </>
    )
}
