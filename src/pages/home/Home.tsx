import React, { useEffect, useState } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import ListPosting from '../../components/post/listPosting/ListPosting';
import ListTheme from '../../components/theme/listTheme/ListTheme';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import NewPosting from '../../components/post/newPosting/NewPosting';

function Home() {

    const style = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

        const [open, setOpen] = React.useState(false);
        const handleOpen = () => setOpen(true);
        const handleClose = () => setOpen(false);

    return (
        <Grid container direction='column' justifyContent='center' alignItems='center' className='ajust'>
            <Grid item xs={12} className="w-75">
                <Box display='flex' justifyContent='center' marginTop={2}>
                    <Box display='flex' justifyContent='center' marginTop={2}>
                            <Button onClick={handleOpen}>Open modal</Button>
                            <Modal
                                open={open}
                                onClose={handleClose}
                                aria-labelledby="modal-modal-title"
                                aria-describedby="modal-modal-description"
                            >
                                <Box sx={style}>
                                    <Typography id="modal-modal-title" variant="h6" component="h2">
                                        Text in a modal
                                    </Typography>
                                    <NewPosting/>
                                </Box>
                            </Modal>
                    </Box>
                </Box>
                <Box>
                    <ListPosting />
                </Box>
            </Grid>
        </Grid>
    )
}

export { Home }