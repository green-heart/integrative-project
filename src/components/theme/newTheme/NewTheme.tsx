import { Button, Container, TextField, Typography } from "@material-ui/core";
import { ChangeEvent, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Theme from "../../../models/Theme";
import { post, put, searchById } from "../../../services/Service";
import { TokenState } from "../../../store/tokens/tokensReducer";

function NewTheme(){
    let navigate = useNavigate()
    const { id } = useParams<{id: string}>();
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );
    const [theme, setTheme] = useState<Theme>({
        id: 0,
        classification: ''
    })

    useEffect(() => {
        if (token == "") {
            toast.error ('Você precisa estar logado', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            });
            navigate ("/login")
        }
    }, [token])

    useEffect(() => {
        if(id !== undefined){
            findByIdTheme(id)
        }
    }, [id])

    async function findByIdTheme(id:string) {
        searchById(`/theme/${id}`, setTheme, {
            headers: {
                'Authorization': token
            }
        })
    }

    function updatedTheme(e: ChangeEvent<HTMLInputElement>){

        setTheme({
            ...theme,
            [e.target.name]: e.target.value,
        })
    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        console.log("theme" + JSON.stringify(theme))

        if (id !== undefined) {
            console.log(theme)
            put(`/theme/put`, theme, setTheme, {
                headers: {
                    'Authorization': token
                }
            })
            toast.success('Tema atualizado com sucesso', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            });

        } else {
            post(`/theme/create`, theme, setTheme, {
                headers: {
                    'Authorization': token
                }
            })
            toast.success('Tema cadastrado com sucesso', {
                position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: false,
                    theme: "colored",
                    progress: undefined,
            });
        }
        back()
    }

    function back() {
        navigate('/home')
    }
    
    return (
        <Container maxWidth="sm" className="top">
        <form onSubmit={onSubmit}>
            <Typography variant="h3" color="textSecondary" component="h1" align="center" >Formulário de cadastro tema</Typography>
            <TextField value={theme.classification} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedTheme(e)} id="classification" label="classification" variant="outlined" name="classification" margin="normal" fullWidth />
            <Button type="submit" variant="contained" color="primary">
                Finalizar
            </Button>
        </form>
    </Container>
    )
}

export default NewTheme;