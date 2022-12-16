import React, {ChangeEvent, useEffect, useState} from 'react';
import {Grid, Box, Typography, Button, TextField} from '@material-ui/core';
import {Link, useNavigate} from 'react-router-dom';
import './Register.css';
import User from '../../models/User';
import { register } from '../../services/Service';

function Register(){

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
            email:'',
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
        register(`/users/sign_up`, user, setUserResult)
        alert('Usuario cadastrado com sucesso')
            navigate("/login")
        }else{
            alert('Dados inconsistentes. Favor verificar as informações de cadastro.')
        }
    }
      

    return (
        <Grid container direction='column' justifyContent='center' alignItems='center'>
            <Grid item xs={6}>
                <Box padding={10}>
                    <form onSubmit={onSubmit}> 
                        <Typography variant='h3' gutterBottom  component='h3' align='center' className='text2'>𝙲𝚊𝚍𝚊𝚜𝚝𝚛𝚊𝚛</Typography>
                        <TextField  value={user.name} onChange={(e: ChangeEvent<HTMLInputElement>) =>updatedModel(e)} required id='name' label='Nome' variant='outlined' name='name' margin='normal' />
                        <TextField value={user.username} onChange={(e: ChangeEvent<HTMLInputElement>) =>updatedModel(e)} required id='username' label='Username' variant='outlined' name='username' margin='normal' />
                       
                        <div> <TextField value={user.email} onChange={(e: ChangeEvent<HTMLInputElement>) =>updatedModel(e)} required id='email' label='Email' variant='outlined' name='email' margin='normal' type='email' fullWidth  /></div>
                        <TextField value={user.password} onChange={(e: ChangeEvent<HTMLInputElement>) =>updatedModel(e)} required id='password' label='Senha' variant='outlined' name='password' margin='normal' type='password' />
                        <TextField value={confirmPassword} onChange={(e: ChangeEvent<HTMLInputElement>) =>confirmPasswordHandle(e)}required id='confirmPassword' label='Confirme sua senha' variant='outlined' name='confirmPassword' margin='normal' type='password' />
                        <Box marginTop={2} textAlign='center'>

                        
                        <a href='/login' id='text'> <Button id='color2' variant='contained'>
                                Voltar     
                                </Button>
                                </a> 
                            
                                
                            <Button id='color1' type='submit' variant='contained'>
                                 Cadastrar 
                                </Button>
                        </Box>
                    </form>
                </Box>

            </Grid>


        </Grid>
    );

}

export {Register}