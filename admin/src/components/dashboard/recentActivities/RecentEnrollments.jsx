import React, { useState, useEffect } from 'react';
import useRecent from '../../../hooks/useRecent'; // Import your custom hook

const RecentEnrollments = () => {
    const [data, setData] = useState([])

    useRecent('EnrollmentRequest', setData); // Use your custom hook here

    console.log(data)

    return (
        <div>
            <h2>Most Recent Activities</h2>
            <ul>
                {data.length > 0 ? (
                    data.map((activity, index) => (
                        <li key={index}>
                            {activity.status} - {activity.timestamp.toDate().toLocaleString()}
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
