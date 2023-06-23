import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/equipManage.css'
export default function EquipManage() {
    return (
        <>
            <div className='equipManage-container'>
                <div className='add-item'>
                    <div className='item-label'>
                        Add Item
                    </div>
                    <div>
                        <input type="text" placeholder='Equipment name' />
                    </div>
                    <div>
                        <input type="number" placeholder='Quantity' />
                    </div>
                    <div>
                        <button>Done</button>
                    </div>
                </div>

                <div className='remove-item'>
                    <div className='item-label'>
                       Remove Item
                    </div>
                    <div>
                        <input type="text" placeholder='Equipment name' />
                    </div>
                    <div>
                        <input type="number" placeholder='Quantity' />
                    </div>
                    <div>
                        <button>Done</button>
                    </div>
                </div>
                <div className='update-item'>
                <div className='item-label'>
                        Update Item
                    </div>
                    <div>
                        <input type="text" placeholder='Equipment name'/>
                    </div>
                    <div>
                        <input type="number" placeholder='Quantity'/>
                    </div>
                    <div>
                        <button>Done</button>
                    </div>
                </div>
            </div>
        </>
    )
}
