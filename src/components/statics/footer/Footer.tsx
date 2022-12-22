import React from 'react';
import { Typography, Box, Grid, } from '@material-ui/core';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import './Footer.css';

function Footer(){ 
    return(
        <>
        <Grid container justifyContent="center" alignItems="center">
                <Grid alignItems="center" justifyContent='center' item xs={12} style={{backgroundColor: '#rgba(96, 108, 56, 0.7)', height: '60px'}}>
                        <Typography variant="subtitle2" align="center" className='textos' style={{marginTop: 20}}>Green Heart © Copyright 2022</Typography>
                </Grid>
            </Grid>
        </>
    )
}

export {Footer}