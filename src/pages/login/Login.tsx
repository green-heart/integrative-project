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
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { toast } from 'react-toastify';


const theme = createTheme();

function Login() {

    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

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
                            <FormControl fullWidth  variant="outlined">
                                        <InputLabel htmlFor="outlined-adornment-password">Senha</InputLabel>
                                        <OutlinedInput
                                           value={userLogin.password}
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
                                            
                                            fullWidth 
                                        />
                                    </FormControl>
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
                                        Entrar
                                    </Button>
                                </Box>
                            </Grid>
                            <Grid container justifyContent="flex-end">
                                <Link id="sign-up" to="/registeruser">
                                    {"Não possui conta? Cadastre-se"}
                                </Link>
                            </Grid>
                        </form>
                    </Box>
                </Grid>
            </Container>
        </ThemeProvider>
    );
}

export { Login }