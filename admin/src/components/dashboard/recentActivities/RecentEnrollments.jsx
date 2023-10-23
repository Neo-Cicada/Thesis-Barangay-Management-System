import React, { useState, useEffect } from 'react';
import useRecent from '../../../hooks/useRecent';

const RecentEnrollments = () => {
    const [data, setData] = useState([])

    useRecent('EnrollmentRequest', setData);

    console.log(data)

    return (
        <div>
            <h2 style={{fontWeight: 500}}>Most Recent Activities</h2>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1em' }}>
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

export default RecentEnrollments;
