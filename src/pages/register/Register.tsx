import React, { ChangeEvent, useEffect, useState } from 'react';
import { Grid, Typography, TextField, Container, ThemeProvider, CssBaseline, createTheme } from '@material-ui/core';
import { Link, useNavigate } from 'react-router-dom';
import User from '../../models/User';
import { register } from '../../services/Service';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { toast } from 'react-toastify';

const theme = createTheme();
function Register() {

    let navigate = useNavigate();
    const [confirmPassword, setConfirmPassword] = useState<string>("")
    const [user, setUser] = useState<User>({

        id: 0,
        name: '',
        username: '',
        email: '',
        password: ''
    })

    const [userResult, setUserResult] = useState<User>(
        {
            id: 0,
            name: '',
            username: '',
            email: '',
            password: ''
        })

    useEffect(() => {
        if (userResult.id !== 0) {
            navigate("/login")
        }
    }, [userResult])

    function confirmPasswordHandle(e: ChangeEvent<HTMLInputElement>) {
        setConfirmPassword(e.target.value)
    }

    function Copyright(props: any) {
        return (
            <Typography variant="body2" color="text.secondary" align="center" {...props}>
                {'Copyright © '}
                <Link color="inherit" to="">
                    Green Heart
                </Link>{' '}
                {new Date().getFullYear()}
                {'.'}
            </Typography>
        );
    }

    function updatedModel(e: ChangeEvent<HTMLInputElement>) {

        setUser({
            ...user,
            [e.target.name]: e.target.value
        })

    }
    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        if (confirmPassword === user.password) {
            register(`/users/sign_up`, user, setUserResult)
            toast.success('Usuário criado com sucesso!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
            navigate("/login")
        } else {
            toast.error('Dados inconsistentes!', {
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
                <Grid>
                    <Box id='main' sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}>
                        <form onSubmit={onSubmit}>
                            <Typography component="h1" variant="h5" align="center" id='subtitle'>
                                Crie sua conta Green Heart
                            </Typography>
                            <Grid container spacing={1}>
                                <Grid item xs={12} sm={6}>
                                    <TextField value={user.name} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} required id='name' label='Nome' variant='outlined' name='name' margin='normal' style={{ marginRight: 4 }} />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField value={user.username} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} required id='username' label='Username' variant='outlined' name='username' margin='normal' style={{ marginLeft: 4 }} />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField value={user.email} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} required id='email' label='Email' variant='outlined' name='email' margin='normal' type='email' style={{ width: '100%' }} />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField value={user.password} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} required id='password' label='Senha' variant='outlined' name='password' margin='normal' type='password' style={{ marginRight: 4 }} />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField value={confirmPassword} onChange={(e: ChangeEvent<HTMLInputElement>) => confirmPasswordHandle(e)} required id='confirmPassword' label='Confirmar' variant='outlined' name='confirmPassword' margin='normal' type='password' style={{ marginLeft: 4 }} />
                                </Grid>
                            </Grid>
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
                                        Criar Conta
                                    </Button>
                                </Box>
                            </Grid>
                            <Grid container justifyContent="flex-end">
                                <Link to="/Login" id='sign-in'>
                                    Já possui conta? Entre
                                </Link>
                            </Grid>
                        </form>
                    </Box>
                </Grid>
            </Container>
        </ThemeProvider>
    );
}

export { Register }