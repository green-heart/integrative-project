import React from 'react';
import { Typography, Box, Grid, } from '@material-ui/core';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import './Footer.css';

function Footer(){ 
    return(
        <>
        <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid alignItems="center" item xs={12}>
                    <Box className='box1'>
                        <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center" >
                            <Typography variant="h5" align="center" gutterBottom className='textos'></Typography>
                        </Box>
                    </Box>
                    <Box className='box1'>
                        <Box paddingTop={1}>
                            <Typography variant="subtitle2" align="center" gutterBottom className='textos' >©2022 Copyright</Typography>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}

export {Footer}