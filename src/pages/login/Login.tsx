import React, {useState, ChangeEvent, useEffect} from 'react';
import { Grid,Typography, TextField, Button } from '@material-ui/core';
import {Box} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import {api, login} from '../../services/Service';
import useLocalStorage from 'react-use-localstorage';
import './Login.css';
import UserLogin from '../../models/Login';
import { useDispatch } from 'react-redux';
import { addToken } from '../../store/tokens/actions';


function Login() {

    let navigate = useNavigate();
    const dispatch = useDispatch();
    const [token, setToken] = useState('');

    const [userLogin, setUserLogin] = useState<UserLogin>(
        {
            id: 0,
            username: '',
            password: '',
            token: '',
        })

        function updatedModel(e: ChangeEvent<HTMLInputElement>){

            setUserLogin({
                ...userLogin,
                [e.target.name]: e.target.value
            })
        }

        useEffect(() =>{
            if(token != ''){
                dispatch(addToken(token));
                navigate('/home')
            }
        }, [token])

        async function onSubmit(e: ChangeEvent<HTMLFormElement>){
            e.preventDefault();

            try{
                const response = await api.post(`/auth/login`, userLogin)
                setToken(response.data.token)
 
                alert('Usuário logado com sucesso!')
            }catch(Error){
                alert(' Dados do usuário inconsistentes. Erro de Login')   //Inconsistent userdata. Login error
            }
        }

    return (
        <Grid container direction='column' justifyContent='center' alignItems='center' className='ajust'>
            <Grid item xs={6}>
                <Box paddingX={20}>
                    <form onSubmit={onSubmit}>
                        <Typography variant='h3' gutterBottom component='h3' align='center' className='ajust1'>𝙶𝚛𝚎𝚎𝚗 𝙷𝚎𝚊𝚛𝚝💚</Typography>
                        <TextField value={userLogin.username} onChange={(e: ChangeEvent<HTMLInputElement>) =>updatedModel(e)} id='username' label='Username' variant='outlined' name='username' margin='normal' fullWidth />
                        <TextField value={userLogin.password} onChange={(e: ChangeEvent<HTMLInputElement>) =>updatedModel(e)} id='password' label='Senha' variant='outlined' name='password' margin='normal' type='password'fullWidth />
                        <Box marginTop={2} textAlign='center'>
                        
                        <Button id='color' type='submit' variant='contained'  >
                                Entrar
                                </Button>
                            
                        </Box>
                    </form>
                    <Box display='flex' justifyContent='center' marginTop={2}>
                        <Box marginRight={1}>
                            <Typography variant='subtitle1' gutterBottom align='center' className='ajust2' >Não tem uma conta?</Typography>
                        </Box>
                        <Link to='/registeruser'>
                            <Typography variant='subtitle1' gutterBottom align='center' className='ajust2'>Cadastre-se</Typography>
                            </Link>
                    </Box>

                </Box>
            </Grid>
            <Grid item xs={6} className='image'>
        
            </Grid>
        </Grid>
    );
}

export {Login}