import React, { useState, useEffect } from 'react';
import useRecent from '../../../hooks/useRecent'; // Import your custom hook

const RecentFacilities = () => {
    const [data, setData] = useState([])

    useRecent('FacilityRequest', setData); // Use your custom hook here

    console.log(data)

    return (
        <div>
            <h2>Most Recent Activities</h2>
            <ul style={{ display:'flex', flexDirection:'column', gap:'1em'}}>
                {data.length > 0 ? (
                    data.map((activity, index) => (
                        <li key={index}>
                           <span className='recent-status'>{activity.status}</span> - {activity.timestamp.toDate().toLocaleString()}
                        </li>
                    ))
                ) : (
                    <li>No activities found.</li>
                )}
            </ul>
        </div>
    );
}

export default RecentFacilities;
