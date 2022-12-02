import React, {ChangeEvent, useEffect, useState} from 'react';
import {Grid, Box, Typography, Button, TextField} from '@material-ui/core';
import {Link, useNavigate} from 'react-router-dom';
import './RegisterUser.css';
import User from '../../models/User';
import { registerUser } from '../../services/Service';

function RegisterUser(){

    let navigate = useNavigate();
    const [confirmPassword, setConfirmPassword] = useState<string>("")
    const [user, setUser] = useState<User>({

        id: 0,
            name: '',
            username: '',
            password: ''
        })

    const [userResult, setUserResult] = useState<User>(
        {
            id: 0,
            name: '',
            username: '',
            password: ''
        })

    useEffect(() => {
        if (userResult.id !== 0) {
            navigate("/login")
        }
    }, [userResult])

    function confirmPasswordHandle(e: ChangeEvent<HTMLInputElement>){
        setConfirmPassword(e.target.value)
    }


    function updatedModel(e: ChangeEvent<HTMLInputElement>) {

        setUser({
            ...user,
            [e.target.name]: e.target.value
        })

    }
    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        if(confirmPassword === user.password){
        registerUser(`/users/register`, user, setUserResult)
        alert('Usuario cadastrado com sucesso')
        }else{
            alert('Dados inconsistentes. Favor verificar as informações de cadastro.')
        }
    }

    return (
        <Grid container direction='row' justifyContent='center' alignItems='center'>
            <Grid item xs={6} className='image2'></Grid>
            <Grid item xs={6} alignItems='center'>
                <Box padding={10}>
                    <form onSubmit={onSubmit}> 
                        <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className='text2'>Cadastrar</Typography>
                        <TextField value={user.name} onChange={(e: ChangeEvent<HTMLInputElement>) =>updatedModel(e)} id='name' label='name' variant='outlined' name='name' margin='normal' fullWidth />
                        <TextField value={user.username} onChange={(e: ChangeEvent<HTMLInputElement>) =>updatedModel(e)} id='username' label='username' variant='outlined' name='username' margin='normal' fullWidth />
                        <TextField value={user.password} onChange={(e: ChangeEvent<HTMLInputElement>) =>updatedModel(e)} id='password' label='password' variant='outlined' name='password' margin='normal' type='password' fullWidth />
                        <TextField value={confirmPassword} onChange={(e: ChangeEvent<HTMLInputElement>) =>confirmPasswordHandle(e)} id='confirmPassword' label='confirmPassword' variant='outlined' name='confirmPassword' margin='normal' type='password' fullWidth />
                        <Box marginTop={2} textAlign='center'>
                            <Link to='/login' className='text-decorator-none '>
                                <Button  variant='contained' color='secondary' className='btnCancelar'>
                                    Cancelar
                                </Button>
                            </Link>
                            <Button type='submit' variant='contained' color='primary'>
                                    Cadastrar
                                </Button>
                        </Box>
                    </form>
                </Box>

            </Grid>


        </Grid>
    );

}

export {RegisterUser}
