import React from 'react';
import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import './Navbar.css'
import { TokenState } from '../../../store/tokens/tokensReducer';
import { addToken } from '../../../store/tokens/actions';

function Navbar() {
    const dispatch = useDispatch();
    let navigate = useNavigate ();
    const token = useSelector <TokenState, TokenState ['tokens']>(
        (state) => state.tokens
    )

    function goLogout() {
        dispatch(addToken(''))
        alert('Usuário deslogado')
        navigate ('/login');
    }

    return (
        <>
            <AppBar position="static">
                <Toolbar variant="dense">
                    <Box style={{ cursor: "pointer" }} >
                        <Typography variant="h5" color="inherit">
                            <Link to='/home'>Green Heart</Link>
                        </Typography>
                    </Box>
                    <Box display="flex" justifyContent="start">
                        <Box mx={1} style={{ cursor: "pointer" }}>
                            <Typography variant="h6" color="inherit">
                                <Link to='/posting'>Postings</Link>
                            </Typography>
                        </Box>
                        <Box mx={1} style={{ cursor: "pointer" }}>
                            <Typography variant="h6" color="inherit">
                                temas
                            </Typography>
                        </Box>
                        <Box mx={1} style={{ cursor: "pointer" }}>
                            <Typography variant="h6" color="inherit">
                                cadatrar tema
                            </Typography>
                        </Box>
                        <Link to='/login' className='text-decorator-none'>
                            <Box mx={1} style={{ cursor: "pointer", color: "white" }}>
                                <Typography variant="h6" color="inherit">
                                    login
                                </Typography>
                            </Box>
                        </Link>
                        <IconButton onClick={goLogout}>
                            <Box mx={1} style={{ cursor: "pointer", color: "white" }}>
                                <Typography variant="h6" color="inherit">
                                    logout 
                                </Typography>
                            </Box>
                        </IconButton>

                    </Box>

                </Toolbar>
            </AppBar>
        </>
    )
}

export { Navbar };