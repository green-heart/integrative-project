import React, { ChangeEvent, useEffect, useState } from 'react';
import { Grid, Typography, TextField, Container, ThemeProvider, CssBaseline, createTheme } from '@material-ui/core';
import { Link, useNavigate } from 'react-router-dom';
import User from '../../models/User';
import { register } from '../../services/Service';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { toast } from 'react-toastify';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Input from '@mui/material/Input';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import './Register.css';

const theme = createTheme();

function Register() {

    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    let navigate = useNavigate();
    const [confirmPassword, setConfirmPassword] = useState<string>("")
    const [user, setUser] = useState<User>({

        id: 0,
        name: '',
        username: '',
        email: '',
        photo: '',
        password: ''
    })

    const [userResult, setUserResult] = useState<User>(
        {
            id: 0,
            name: '',
            username: '',
            email: '',
            photo: '',
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
        <Container id="body">
            <ThemeProvider theme={theme}>
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <Grid>
                        <Typography id="title" variant='h3' gutterBottom component='h3' align='center' >
                            𝙶𝚛𝚎𝚎𝚗 𝙷𝚎𝚊𝚛𝚝💚
                        </Typography>
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
                                        <TextField value={user.name} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} required id='name' label='Nome' variant='outlined' name='name' margin='normal' style={{}} />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField value={user.username} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} required id='username' label='Nome de Usuário' variant='outlined' name='username' margin='normal' />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Box sx={{ mt: -2 }}>
                                            <TextField fullWidth value={user.email} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} required id='email' label='Endereço de Email' variant='outlined' name='email' margin='normal' type='email' />
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <FormControl variant="outlined">
                                            <InputLabel htmlFor="outlined-adornment-password">Senha</InputLabel>
                                            <OutlinedInput
                                                value={user.password}
                                                onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                                                required
                                                id="outlined-adornment-password"
                                                type={showPassword ? 'text' : 'password'}
                                                endAdornment={
                                                    <InputAdornment position="end">
                                                        <IconButton
                                                            aria-label="toggle password visibility"
                                                            onClick={handleClickShowPassword}
                                                            onMouseDown={handleMouseDownPassword}
                                                            edge="end"
                                                        >
                                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                                        </IconButton>
                                                    </InputAdornment>
                                                }
                                                label="Senha"
                                                name='password'
                                            />
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <FormControl variant="outlined">
                                            <InputLabel htmlFor="outlined-adornment-password">Confirmar</InputLabel>
                                            <OutlinedInput
                                                value={confirmPassword}
                                                onChange={(e: ChangeEvent<HTMLInputElement>) => confirmPasswordHandle(e)}
                                                required
                                                id="outlined-adornment-password"
                                                type={showPassword ? 'text' : 'password'}
                                                endAdornment={
                                                    <InputAdornment position="end">
                                                        <IconButton
                                                            aria-label="toggle password visibility"
                                                            onClick={handleClickShowPassword}
                                                            onMouseDown={handleMouseDownPassword}
                                                            edge="end"
                                                        >
                                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                                        </IconButton>
                                                    </InputAdornment>
                                                }
                                                label="Password"
                                            />
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Box sx={{ mt: 1 }}>
                                            <TextField
                                                value={user.photo}
                                                onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                                                id="photo"
                                                label="URL da foto de Perfil"
                                                fullWidth
                                                InputProps={{
                                                    startAdornment: (
                                                        <InputAdornment position="start">
                                                            <AddAPhotoIcon />
                                                        </InputAdornment>
                                                    ),
                                                }}
                                                variant="standard"
                                                name="photo"
                                            />
                                        </Box>
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
                                        {"Já possui conta? Entre"}
                                    </Link>
                                </Grid>
                            </form>
                        </Box>
                    </Grid >
                </Container>
            </ThemeProvider >
        </Container>
    );
}

export { Register }