import React, { useEffect, useState } from 'react';
import {Typography, Box, Grid, Button} from '@material-ui/core';
import './Home.css';


function Home(){
    const [num, setNum] = useState (0);

    useEffect (() => {
        document.title = `Clicou ${num} vezes`;

        return () => {

        }
    }, [num]);
    return(
        <>
        <Grid container direction="row" justifyContent="center" alignItems="center" style={{ backgroundColor: "#3F51B5" }}>
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20} >
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" style={{ color: "white", fontWeight: "bold" }}>Seja bem vindo(a) ao Green Heart!!</Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" style={{ color: "white", fontWeight: "bold" }}>Comente, opine, curta e ajuda nas mudanças climáticas!!</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                        </Box>
                        <Button variant="outlined" style={{ borderColor: "white", backgroundColor: "#3F51B5", color: "white" }}>Ver Postagens</Button>
                    </Box> 
                </Grid>
                <Grid item xs={6} >
                    <img src="https://i.imgur.com/H88yIo2.png" alt="" width="500px" height="500px" />
                </Grid>
                <Grid xs={12} style={{ backgroundColor: "white" }}>
                </Grid>
            </Grid>
        </>
    )
}

export {Home}