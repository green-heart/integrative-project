import Posting from '../../../models/Posting';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from "react-router-dom";
import { ChangeEvent, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { TokenState } from '../../../store/tokens/tokensReducer';
import Theme from '../../../models/Theme';
import { post, put, search, searchById } from '../../../services/Service';
import { Container, Typography, TextField, Button, Select, InputLabel, MenuItem, FormControl, FormHelperText } from "@material-ui/core";

function NewPosting() {


    let navigate = useNavigate();
    const { id } = useParams<{ id: string }>();
    const [themes, setThemes] = useState<Theme[]>([]);
    const token = useSelector<TokenState, TokenState['tokens']>(
        (state) => state.tokens
    )

    useEffect(() => {
        if (token == "") {
            alert("Precisa estar logado");
            navigate("/login");
        }
    }, [token])

    const [theme, setTheme] = useState<Theme>({
        id: 0,
        classification: "",
        types: "",
    })

    const [posting, setPosting] = useState<Posting>({
        id: 0,
        text: "",
        image: "",
        location: "",
        date: new Date(),
        theme: null,
        user: null,


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
        await search(`/theme/theme/all`, setThemes, {
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
        <Container maxWidth="sm" className="topo">
            <form onSubmit={onSubmit}>
                <Typography variant="h3" color="textSecondary" component="h1" align="center" >Nova Postagem</Typography>
                <TextField value={posting.text} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPosting(e)} id="titulo" label="titulo" variant="outlined" name="text" margin="normal" fullWidth />

                <FormControl >
                    <InputLabel id="demo-simple-select-helper-label">Tema </InputLabel>

                    <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
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

