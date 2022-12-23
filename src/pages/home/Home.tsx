import React, { useEffect, useState } from 'react';
import { Box, Grid, Button } from '@material-ui/core';
import './Home.css';
import { Link } from 'react-router-dom';
import ListPosting from '../../components/post/listPosting/ListPosting';
import ListTheme from '../../components/theme/listTheme/ListTheme';

function Home() {
    return (
        <Grid container direction='column' justifyContent='center' alignItems='center' className='ajust'>
            <Grid item xs={12} className="w-75">
                <Box display='flex' justifyContent='center' marginTop={2}>
                    <Box display='flex' justifyContent='center' marginTop={2}>
                        <Link to="/newPosting" id='text1' className='w-50'>
                            <Button className="w-50" style={{ marginLeft: 250, marginTop: 10 }} >
                                Começar nova postagem
                            </Button>
                        </Link>
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