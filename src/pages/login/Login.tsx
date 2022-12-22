import React, { useState, ChangeEvent, useEffect } from 'react';
import { Grid, Typography, TextField, Button } from '@material-ui/core';
import { Box } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { api, login } from '../../services/Service';
import useLocalStorage from 'react-use-localstorage';
import './Login.css';
import SignIn from '../../models/SignIn';
import { useDispatch } from 'react-redux';
import { addToken } from '../../store/tokens/actions';
import { styles } from './styles';
import { toast } from 'react-toastify';

function Login() {

    const classes = styles();

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
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
                });
        } catch (Error) {
            toast.error('Dados do usuário inconsistentes. Erro ao logar!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
                });        }
    }

    return (
        <Grid container direction='column' justifyContent='center' alignItems='center' className='ajust'>
            <Grid item xs={6}>
                <Box paddingX={20}>
                    <form onSubmit={onSubmit} className={classes.form} >
                        <Typography variant='h3' gutterBottom component='h3' align='center' className='ajust1'>𝙶𝚛𝚎𝚎𝚗 𝙷𝚎𝚊𝚛𝚝💚</Typography>
                        <TextField value={userLogin.username} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='username' label='Username' variant='outlined' name='username' margin='normal' fullWidth />
                        <TextField value={userLogin.password} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='password' label='Senha' variant='outlined' name='password' margin='normal' type='password' fullWidth />
                        <Box marginTop={2} textAlign='center'>
                        </Box>
                        <Box display='flex' justifyContent='center' marginTop={2}>
                        <Box>
                            <Button id='colorbutton3' type='submit' variant='contained' style={{ marginRight: 6 }} >
                                Entrar
                            </Button>
                        </Box>
                    
                        <Box>   
                            <Link to='/registeruser' className='ajust'>
                            <Button id='colorbutton3' type='submit' variant='contained'  style={{ marginLeft: 10 }}>
                                Cadastre-se
                            </Button>
                            </Link>
                        </Box>
                    
                    </Box>
                    </form>

                </Box>
            </Grid>
            <Grid item xs={6} className='image'>

            </Grid>
        </Grid>
    );
}

export { Login }