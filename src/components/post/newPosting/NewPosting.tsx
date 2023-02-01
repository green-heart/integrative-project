import Posting from '../../../models/Posting';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from "react-router-dom";
import { ChangeEvent, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { TokenState } from '../../../store/tokens/tokensReducer';
import Theme from '../../../models/Theme';
import { post, put, search, searchById } from '../../../services/Service';
import { Typography, TextField, Button, Select, InputLabel, MenuItem, FormControl, FormHelperText } from "@material-ui/core";
import User from '../../../models/User';
import useLocalStorage from 'react-use-localstorage';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import InputAdornment from '@mui/material/InputAdornment';
import { Container } from './styles';


function NewPosting() {

    const [users, setUsers] = useState<User[]>([]);
    const [user, setUser] = useState<User>({
        id: 0,
        name: '',
        username: '',
        password: '',
        email: '',
        photo: '',
        token: null
    });

    const [username, setUsername] = useLocalStorage('username');

    useEffect(() => {
        if (!users.length) {
            getUsers();
        }
        else if (!user.username) {
            for (let i = 0; i < users.length; i++) {
                if (users[i].username == username) {
                    setUser(users[i])
                    break;
                }
            }
        }
    });

    useEffect(() => {
        getUsers();
    }, [username])

    const token = useSelector<TokenState, TokenState['tokens']>(
        (state) => state.tokens
    )

    async function getUsers() {
        await search('/users/all', setUsers, {
            headers: {
                Authorization: token
            }
        })
    }

    let navigate = useNavigate();
    const { id } = useParams<{ id: string }>();
    const [themes, setThemes] = useState<Theme[]>([]);


    useEffect(() => {
        if (token == "") {
            alert("Precisa estar logado");
            navigate("/login");
        }
    }, [token])

    const [theme, setTheme] = useState<Theme>({
        id: 0,
        classification: ''
    })

    const [posting, setPosting] = useState<Posting>({
        id: 0,
        text: "",
        image: "",
        location: "",
        date: new Date(),
        theme: null,
        user: null
    })

    useEffect(() => {
        setPosting({
            ...posting,
            theme: theme
        })
    }, [theme])

    useEffect(() => {
        getThemes()
        if (id !== undefined) {
            findByIdPosting(id)
        }
    }, [id])

    async function getThemes() {
        await search(`/theme/all`, setThemes, {
            headers: {
                Authorization: token
            }
        })
    }

    async function findByIdPosting(id: string) {
        await searchById(`/posting/${id}`, setPosting, {
            headers: {
                Authorization: token
            }
        })
    }

    function updatedPosting(e: ChangeEvent<HTMLInputElement>) {
        setPosting({
            ...posting,
            [e.target.name]: e.target.value,
            theme: theme
        })
    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()

        if (id !== undefined) {
            put(`/posting/put`, posting, setPosting, {
                headers: {
                    'Authorization': token
                }
            })
            alert("Atualizado")
        } else {
            post(`/posting/create`, posting, setPosting, {
                headers: {
                    'Authorization': token
                }
            })
            alert("Postagem criada");
            back();
        }
    }

    function back() {
        navigate('/home')
    }

    return (
        <Container>
            <div className="profile-cover"></div>
                <img
                    src="https://w7.pngwing.com/pngs/524/676/png-transparent-computer-icons-user-my-account-icon-cdr-eps-rim.png"
                    alt="Avatar"
                    className="profile-picture"
                />
                <Typography variant="h1" color="initial">
                    @{user.username}
                </Typography>         
            <form onSubmit={onSubmit}>
                 <TextField
                    value={posting.text}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPosting(e)}
                    id="titulo"
                    label="Digite sua publicação 💚"
                    variant="outlined"
                    name="text"
                    margin="normal"
                    fullWidth
                    placeholder="Placeholder"
                    multiline
                />
                <TextField
                    value={posting.image}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPosting(e)}
                    id="image"
                    label="Adicione uma imagem para sua publicação"
                    fullWidth
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <AddAPhotoIcon />
                            </InputAdornment>
                        ),
                    }}
                    variant="standard"
                    name="image"
                />
                <FormControl >
                    <InputLabel id="demo-simple-select-helper-label">Tema </InputLabel>
                    <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        required
                        onChange={(e) => searchById(`/theme/${e.target.value}`, setTheme, {
                            headers: {
                                'Authorization': token
                            }
                        })}>
                        {
                            themes.map(theme => (
                                <MenuItem value={theme.id}>{theme.classification}</MenuItem>
                            ))
                        }
                    </Select>
                    <FormHelperText>Escolha um tema para a posting</FormHelperText>
                </FormControl>
                <Button type="submit" variant="contained" style={{ paddingLeft: 10 }}>
                    Finalizar
                </Button>
            </form>
        </Container>
    )
}
export default NewPosting;