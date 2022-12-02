import React, { ChangeEvent, useEffect, useState } from 'react';
import { Grid,Typography, TextField, Button } from '@material-ui/core';
import {Box} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import useLocalStorage from 'react-use-localstorage';
import UserLogin from '../../models/UserLogin';
import { login } from '../../services/Service';
import { DateRangeSharp } from '@mui/icons-material';

function Login() {

    let navigate = useNavigate();
    const [token, setToken] = useLocalStorage('token')

    const [userLogin, setUserLogin] = useState<UserLogin>(
        {
            id: 0,
            user: '',
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
                navigate('/home')
            }
        }, [token])





        

        async function onSubmit(e: ChangeEvent<HTMLFormElement>){
            e.preventDefault();

            try{
                await login(`/users/login`, userLogin, setToken)
            
 
                alert('Logado com sucesso!')  //Sucessfully logged
            }catch{Error}{
                alert(' Dados do usuário inconsistentes. Erro de Login')   //Inconsistent userdata. Login error
            }




        }

    return (
        <Grid container direction='row' justifyContent='center' alignItems='center'>
            <Grid alignItems='center' xs={6}>
                <Box paddingX={20}>
                    <form>
                        <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className='textos1'>Entrar</Typography>
                        <TextField value={userLogin.user} onChange={(e: ChangeEvent<HTMLInputElement>) =>updatedModel(e)} id='user' label='user' variant='outlined' name='user' margin='normal' fullWidth />
                        <TextField value={userLogin.password} onChange={(e: ChangeEvent<HTMLInputElement>) =>updatedModel(e)} id='password' label='password' variant='outlined' name='password' margin='normal' type='password'fullWidth />
                        <Box marginTop={2} textAlign='center'>
                        
                        <Button type='submit' variant='contained' color='primary'>
                                    Login
                                </Button>
                            
                        </Box>
                    </form>
                    <Box display='flex' justifyContent='center' marginTop={2}>
                        <Box marginRight={1}>
                            <Typography variant='subtitle1' gutterBottom align='center'>Não tem uma conta?</Typography>
                        </Box>
                            <Typography variant='subtitle1' gutterBottom align='center' className='textos1'>Cadastre-se</Typography>
                    </Box>
                </Box>
            </Grid>
            <Grid xs={6} className='imagem'>

            </Grid>
        </Grid>
    );
}

export {Login}