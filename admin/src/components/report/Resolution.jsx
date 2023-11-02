import { Container, Box, Pagination, PaginationItem, Dialog, DialogContent, DialogTitle } from '@mui/material'
import React, { useState } from 'react'
import useRead from '../../hooks/useRead'
import useRecent from '../../hooks/useRecent'
import VisibilityIcon from '@mui/icons-material/Visibility';


export default function Resolution({ resolutionItem }) {
    const itemsPerPage = 2;
    const [currentPage, setCurrentPage] = useState(1);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = currentPage * itemsPerPage;
    const [open, setOpen] = useState(false)
    const [itemData, setItemData] = useState([])
    const items = resolutionItem.map(item => (
        <>
            <tr key={item.id}>
                <td>{item.complainants}</td>
                <td>{item.defendants}</td>
                <td>{item.timestamp && item.timestamp.toDate().toLocaleString()}</td>
                <td style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                }} onClick={(e) => { setOpen(true), setItemData(item) }}>
                    <VisibilityIcon
                        style={{ cursor: 'pointer' }}
                        color="info" />
                </td>
            </tr>
        </>
    ));

    // Calculate the index range of items to display on the current page
    const itemsToDisplay = items.slice(startIndex, endIndex);

    const handlePageChange = (event, page) => {
        setCurrentPage(page);
    };

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
                        {itemsToDisplay}
                    </tbody>
                </table>
                {resolutionItem.length > itemsPerPage && (
                    <div sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Pagination
                            size='small'
                            color='primary'
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                            }}
                            count={Math.ceil(resolutionItem.length / itemsPerPage)}
                            page={currentPage}
                            onChange={handlePageChange}
                            renderItem={(item) => (
                                <PaginationItem
                                    component="a"
                                    href="#"
                                    {...item}
                                />
                            )}
                        />
                    </div>
                )}
            </Container>
            <Dialog fullWidth open={open} onClose={() => setOpen(false)}>
                <DialogTitle sx={{ textAlign: 'center' }}>
                    <h2 style={{
                        textTransform: 'capitalize',
                        color: '#3B5998',
                        fontWeight: 500
                    }}>
                        RESOLUTION CONTENT
                    </h2>
                </DialogTitle>
                <DialogContent sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1em',

                }}>
                    <Box>
                        <p style={{
                            fontSize: '1.2rem',

                            textTransform: 'capitalize', fontWeight: 500
                        }}>Complainant Fullname: {itemData.complainants}</p>
                        <p
                            style={{
                                fontSize: '1.2rem',
                                textTransform: 'capitalize', fontWeight: 500
                            }}
                        >Defendant Fullname: {itemData.defendants}</p>
                    </Box>
                    {itemData.imagePath ? <a style={{ textAlign: 'center', fontSize: '1.2rem' }} href={itemData.imagePath} target='_'>View Uploaded Resolution</a> :
                        <Box >
                            <p style={{
                                textAlign: 'center', fontSize: '1.2rem', textTransform: 'capitalize',
                                color: '#3B5998', fontWeight:'bold'
                            }}>Content</p>
                            <p style={{ fontSize: '1.2rem', textAlign: 'center' }}>{itemData.content} Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam, fugit sequi magnam sint labore tempore, cumque dolorum minima ipsam aspernatur voluptatibus est, quisquam voluptate illo exercitationem iste! Atque, impedit sint?
                            Maiores placeat obcaecati sit dolorem odio corporis quod, similique, labore rerum inventore libero, provident repudiandae aliquid? Expedita nisi ipsum obcaecati quos ipsa illum perferendis, delectus quaerat sit, perspiciatis quae officiis.
                            Enim sit necessitatibus unde quas exercitationem ipsum libero. Temporibus animi esse quidem, eos, vero et aliquid id reprehenderit incidunt alias ea reiciendis nam architecto. Sit illum eius omnis! Quia, ullam.
                            Sunt officiis perferendis dolore reiciendis alias cumque quidem repellat ab, tempore neque exercitationem nesciunt nam maxime cum. Esse dolorum libero tempore vero! Eligendi ipsam modi earum laudantium aliquam dolorem architecto?
                            Cumque facilis minus ducimus nihil saepe ab amet id! Repudiandae nulla ex atque velit dolore illum, veniam dolores in vitae soluta ea quaerat aspernatur architecto. Aperiam fugiat minus nihil doloribus.
                            Architecto porro nisi a voluptate quod eum distinctio fugit veniam eaque hic quisquam molestiae doloremque eveniet consectetur quas, consequatur nemo atque, animi error! Tempora harum officia possimus quae exercitationem unde.
                            Libero consequuntur iure cum quibusdam architecto ea laudantium assumenda similique non fugiat, corrupti sit corporis dolor maxime ut autem recusandae suscipit saepe repudiandae dolorem omnis laborum. Architecto eveniet voluptatum nobis.
                            Minus, nemo porro, cupiditate non cumque culpa nobis ea numquam sequi nesciunt aut molestias neque. Sint magnam ea ab dolor eligendi cupiditate sunt voluptates nulla fugit voluptatem numquam, consectetur at!
                            Dolores, magni magnam illum a odit eaque accusantium placeat ut eligendi, iste, explicabo omnis molestias. Debitis facilis quam quibusdam ipsa repudiandae, nobis non aliquam eum! Fugit odio quis assumenda repudiandae?
                            Rem recusandae rerum libero nostrum a similique nemo, temporibus quisquam repellat assumenda soluta, deleniti eveniet, aperiam repudiandae omnis vitae accusamus quibusdam. Vel delectus exercitationem commodi repudiandae dolore quam esse deleniti.
                            Sint non repellat veritatis qui id commodi unde accusantium sapiente enim minus. Repellendus velit amet ipsa optio delectus sapiente commodi consectetur voluptas nihil. Nostrum numquam et possimus commodi porro voluptate.
                            Quas nostrum sint iusto odit fugit aliquid quia enim. Consequuntur deleniti quo incidunt quae inventore placeat, reiciendis neque aut. Nobis a animi consectetur deserunt laborum, quo fuga suscipit dolores sequi!
                            Voluptatibus hic voluptatem optio laborum voluptas commodi sit veritatis eos facere. Possimus voluptatibus soluta, quo veniam perspiciatis minima sunt numquam. Excepturi deserunt minus quibusdam labore corporis, sed sint iure commodi?
                            Ut ea alias expedita impedit officia voluptates quasi possimus in, maxime natus quo at ipsam? Minima natus illo temporibus officiis ullam, eligendi ad repellat. Omnis repellat fugiat earum aliquid vel!
                            Necessitatibus libero fugiat animi expedita obcaecati odio, iste incidunt consequuntur nostrum eius quo? Doloribus, ipsam. Accusantium quod debitis similique voluptates, ea culpa exercitationem, temporibus itaque optio non blanditiis, tenetur nulla?
                            Ullam tempora accusantium, inventore, modi nulla amet ad quam eius unde quaerat consequuntur delectus, a molestiae quibusdam culpa. Voluptatum fugiat dignissimos error praesentium nostrum obcaecati rerum tenetur voluptas sequi laborum.
                            Sapiente, a. Accusantium veniam et enim. Molestiae quaerat suscipit modi iure excepturi. Quis, suscipit quas unde porro reiciendis aspernatur, libero, nobis necessitatibus voluptas numquam illo! Dolores consectetur suscipit perferendis quibusdam!
                            Saepe odio enim quas, similique voluptatum vero cupiditate quae praesentium necessitatibus error? Ipsum, rerum. Corporis incidunt ratione aliquid aspernatur, quas laudantium fuga, dolorem consectetur ipsam reprehenderit officia quisquam est veritatis.
                            Error aliquid ut atque perspiciatis sunt cupiditate, quo excepturi, deserunt nulla tempore repudiandae incidunt esse molestias fuga! Error enim maiores, voluptas voluptatem minima non fugit eligendi ullam magni veniam quaerat?
                            Porro delectus excepturi suscipit minima consequuntur et saepe consequatur fugit praesentium, qui nihil harum, ratione vero ad explicabo illum a doloremque reprehenderit natus maxime placeat nam! Quisquam debitis minima optio!</p>
                        </Box>}
                </DialogContent>
            </Dialog>
        </>
    )
}
