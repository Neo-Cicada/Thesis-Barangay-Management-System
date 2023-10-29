import React, { useContext } from 'react'
import { MyCertContext } from './CertificateDialog'
export default function CertSummary() {
    const { details } = useContext(MyCertContext)
    const totalQuantity = details.selectedCertificates.reduce((total, item) => total + parseInt(item.quantity, 10), 0);

    return (
        <>
            <div style={{ width: '80%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{ borderBottom: '2px dashed grey' }}>
                    <h2 style={{ textAlign: 'center' }}>
                        Personal Information</h2>
                    <div>
                        <p>Full Name: {details.fullname}</p>
                        <p>Phone Number:{details.phoneNumber}</p>
                        <p>Email:{details.email}</p>
                        <p>Mode of Distribution: {details.mod}</p>
                        {details.address && <p>Address: {details.address}</p>}
                        <p>
                            Total: {details.mod === "Delivery" ? totalQuantity + 50 + " Plus delivery fee" : totalQuantity}
                        </p>
                    </div>
                </div>
                <div>
                    <h2 style={{ textAlign: 'center' }}>
                        Selected Certificate</h2>
                    <div>
                        {details.selectedCertificates.map(item =>
                            <p>Name: {item.name} {item.quantity}</p>
                        )
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
