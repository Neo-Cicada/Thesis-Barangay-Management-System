import React from 'react'
import useRead from '../../hooks/useRead'
import { useState } from 'react'
import RequestBox from '../RequestBox'
import ScrollableContainer from '../ScrollableContainer'
import RequestBoxEnrollment from './RequestBoxEnrollment'
export default function EnrollmentRequest() {
    const [data, setData] = useState([]);
    useRead("EnrollmentRequest", setData)

    const items = data.map(item => <RequestBoxEnrollment data={data}/>)

    return (
        <>
            <ScrollableContainer>
                {items}
            </ScrollableContainer>
        </>
    )
}
