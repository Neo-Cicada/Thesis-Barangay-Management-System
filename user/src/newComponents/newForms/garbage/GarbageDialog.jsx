import { Dialog, DialogContent, DialogTitle } from '@mui/material'
import React from 'react'

export default function GarbageDialog({ open, handleClose }) {
    return (
        <>
            <Dialog open={open} onClose={handleClose} fullWidth>
                <DialogTitle sx={{
                    textAlign: 'center',
                    borderBottom: '2px dashed grey'
                }}>Garbage Collection Form</DialogTitle>
                <DialogContent>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt quidem, ab reprehenderit facilis voluptate temporibus tenetur corporis illo distinctio dolorum, ipsa perferendis deleniti debitis quas totam deserunt sit asperiores aspernatur.
                    Aspernatur delectus enim iste nemo mollitia! Ipsum nesciunt doloribus laboriosam expedita perspiciatis molestias necessitatibus? Officia fuga perferendis neque eius, sunt tenetur quod! Eligendi veritatis accusamus nostrum saepe maxime, aut reprehenderit?
                    Esse accusantium necessitatibus odit voluptate sunt? Fugiat nam incidunt autem eligendi illum, dignissimos officiis. Accusamus inventore in facere pariatur. Molestiae excepturi optio minus delectus. Impedit dignissimos molestias alias labore est.
                    Officia ipsa, et amet corrupti quia esse itaque distinctio optio commodi quisquam magni, explicabo quae provident necessitatibus quasi molestias dicta voluptates enim. Cupiditate quasi velit, alias possimus tempora recusandae vitae.
                    Suscipit, aut reprehenderit? In iusto modi exercitationem alias dolorum optio culpa voluptas deleniti accusamus quis laudantium laboriosam, nesciunt delectus ab illo aspernatur sapiente quisquam sint sed necessitatibus quia libero dolores!
                </DialogContent>
            </Dialog>
        </>
    )
}
