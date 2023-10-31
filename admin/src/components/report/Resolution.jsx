import { Container, Box } from '@mui/material'
import React from 'react'

export default function Resolution() {
    return (
        <>
            <Container>
                <table className="ResolutionTable">
                    <thead>
                        <tr>
                            <th>Complainants</th>
                            <th>Defendants</th>
                            <th>Time</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>John Doe lorem</td>
                            <td>Jane Smith</td>
                            <td>2023-10-31</td>
                            <td>Review</td>
                        </tr>
                        <tr>
                            <td>Alice Johnson</td>
                            <td>Bob Wilson lorem</td>
                            <td>2023-11-01</td>
                            <td>Approve</td>
                        </tr>
                    </tbody>
                </table>
            </Container>






        </>
    )
}
