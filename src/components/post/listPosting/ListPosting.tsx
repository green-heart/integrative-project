import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Posting from '../../../models/Posting';
import { search } from '../../../services/Service'
import {  Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import {Box} from '@mui/material';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { toast } from 'react-toastify';

function ListPosting() {
  const [postings, setPosts] = useState<Posting[]>([])
  let navigate = useNavigate();
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );

  useEffect(() => {
    
    if (token == "") {
      alert ("precisa estar logado")
      navigate("/login")
    } else {
      getPost()
    }

    }, [postings.length])

  async function getPost() {
    await search("/posting/all", setPosts, {
      headers: {
        'Authorization': token
      }
    })
  }

  return (
    <>
      {
        postings.map(posting => (
          <Box m={2} >
            <Link to='/newPosting'>
            <Button variant="contained" className="marginLeft" size='small' color="inherit"> Criar postagem
            </Button>
            </Link>
            <Card variant="outlined">
              <CardContent>
                <Typography color="textSecondary" gutterBottom>
                  Postagens
                </Typography>
                <Typography variant="h5" component="h2">
                  {posting.text}
                </Typography>
                <Typography variant="body2" component="p">
                  {posting.theme?.classification}
                </Typography>
              </CardContent>
              <CardActions>
                <Box display="flex" justifyContent="center" mb={1.5}>

                  <Link to={`/newPosting/${posting.id}`} className="text-decorator-none" >
                    <Box mx={1}>
                      <Button variant="contained" className="marginLeft" size='small' color="primary" >
                        atualizar
                      </Button>
                    </Box>
                  </Link>
                  <Link to={`/deletePosting/${posting.id}`} className="text-decorator-none">
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
  )
}

export default ListPosting;