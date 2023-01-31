import React, { useState, ChangeEvent, useEffect } from 'react';
import { Grid, Typography, TextField } from '@material-ui/core';
import { Link, useNavigate } from 'react-router-dom';
import { api } from '../../services/Service';
import SignIn from '../../models/SignIn';
import { useDispatch } from 'react-redux';
import { addToken } from '../../store/tokens/actions';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import './Login.css';
import { ToastContainer, toast } from 'react-toastify';


const theme = createTheme();

function Login() {

    let navigate = useNavigate();
    const dispatch = useDispatch();
    const [token, setToken] = useState('');

    const [userLogin, setUserLogin] = useState<SignIn>(
        {
            id: 0,
            username: '',
            password: '',
            token: '',
        })

    function updatedModel(e: ChangeEvent<HTMLInputElement>) {

        setUserLogin({
            ...userLogin,
            [e.target.name]: e.target.value
        })
    }

    useEffect(() => {
        if (token != '') {
            dispatch(addToken(token));
            navigate('/home')
        }
    }, [token])

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();

        try {
            const response = await api.post(`/auth/login`, userLogin)
            setToken(response.data.token)
            toast.success('Usuário logado com sucesso!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });

        } catch (Error) {
            toast.warn('Usuário não encontrado!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        }
    }

    return (
        <ThemeProvider theme={theme}>
            <Typography id="title" variant='h3' gutterBottom component='h3' align='center' >
                𝙶𝚛𝚎𝚎𝚗 𝙷𝚎𝚊𝚛𝚝💚
            </Typography>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Grid className='ajust'>
                    <Box
                        id="main"
                        sx={{
                            marginTop: 8,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <form onSubmit={onSubmit}>
                            <Typography id="subtitle" component="h1" variant="h5" align='center'>
                                Socialize para ajudar o Mundo
                            </Typography>
                            <TextField value={userLogin.username} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} required id='username' label='Nome de Usuário' variant='outlined' name='username' margin='normal' fullWidth />
                            <TextField value={userLogin.password} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} required id='password' label='Senha' variant='outlined' name='password' margin='normal' type='password' fullWidth />
                            <Box marginTop={2} textAlign='center'>
                            </Box>
                            <Grid>
                                <Box>
                                    <Button
                                        size="large"
                                        id='login_button'
                                        type="submit"
                                        fullWidth
                                        variant="contained"
                                        sx={{ mt: 3, mb: 2 }}
                                    >
                                        Sign In
                                    </Button>
                                </Box>
                            </Grid>
                            <Grid container justifyContent="flex-end">
                                <Link id="sign-up" to="/registeruser">
                                    {"Não possui conta? Cadastre-se"}
                                </Link>
                            </Grid>
                        </form>
                        <Grid item xs={6} className='image'>

                        </Grid>
                    </Box>
                </Grid>
            </Container>
        </ThemeProvider>
    );
}

export { Login }