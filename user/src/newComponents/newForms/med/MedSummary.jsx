import React, { useContext } from 'react'
import { MyContext } from './MedicineDialogForm'
export default function MedSummary() {
    const { details } = useContext(MyContext);
    return (
        <>
            <div style={{ width: '80%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{borderBottom:'2px dashed grey'}}>
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
                        Selected Items</h2>
                    <div>
                        {details.selectedMedicines.map(item => <p>name: {item.name} | quantiy: {item.count}</p>)}
                    </div>
                </div>

            </div>
        </>
    )
}
