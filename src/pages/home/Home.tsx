import React, { useEffect, useState } from 'react';
import {  Box, Grid, Button } from '@material-ui/core';
import './Home.css';
import { Link } from 'react-router-dom';
import ListPosting from '../../components/post/listPosting/ListPosting';
import ListTheme from '../../components/theme/listTheme/ListTheme';

function Home() {
    return (
        <Grid container direction='column' justifyContent='center' alignItems='center' className='ajust'>
            <Grid item xs={6}>
                <Box display='flex' justifyContent='center' marginTop={2}>
                    <Box display='flex' justifyContent='center' marginTop={2}>
                        <Link to="/newTheme">
                            <Button>
                                Cadastrar tema
                            </Button>
                        </Link>
                        <Link to="/newPosting">
                            <Button>
                                Cadastrar post
                            </Button>
                        </Link>
                    </Box>
                </Box>
                <Box>
                    <ListPosting />
                    <ListTheme/>
                </Box>
            </Grid>
            <Grid item xs={6} className='image'>

            </Grid>
        </Grid>
    )
}

export { Home }