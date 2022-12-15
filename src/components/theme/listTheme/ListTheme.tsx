import { Box, Button, Card, CardActions, CardContent, Typography } from "@material-ui/core";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Theme from "../../../models/Theme";
import { search } from "../../../services/Service";
import { TokenState } from "../../../store/tokens/tokensReducer";


function ListTheme() {
    const [themes, setThemes] = useState<Theme[]>([])
    let navigate = useNavigate();
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    useEffect(() => {
        if(token == ''){
            toast.error('VocÃª precisa estar logado', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            });
            navigate("/login")
        }
    }, [token])

    async function getTheme(){
        await search("theme", setThemes, {
            headers: {
                'Authorization': token
            }
        })
    }

    useEffect(() => {
        getTheme()
    }, [themes.length])

    return (
       <>
       {
        themes.map(theme =>(
            <Box m={2} >
              <Card variant="outlined">
                <CardContent>
                  <Typography color="textSecondary" gutterBottom>
                    Tema
                  </Typography>
                  <Typography variant="h5" component="h2">
                   {theme.classification}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Box display="flex" justifyContent="center" mb={1.5} >
      
                    <Link to={`/formularioTema/${theme.id}`} className="text-decorator-none">
                      <Box mx={1}>
                        <Button variant="contained" className="marginLeft" size='small' color="primary" >
                          atualizar
                        </Button>
                      </Box>
                    </Link>
                    <Link to={`/deletarTema/${theme.id}`} className="text-decorator-none">
                      <Box mx={1}>
                        <Button variant="contained" size='small' color="secondary">
                          deletar
                        </Button>
                      </Box>
                    </Link>
                  </Box>
                </CardActions>
              </Card>
            </Box>
            ))
       }
       
       </>
    );
}

export default ListTheme;