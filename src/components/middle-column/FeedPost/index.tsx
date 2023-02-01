import React, { useState, useEffect, Dispatch, SetStateAction } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Posting from '../../../models/Posting';
import { search } from '../../../services/Service'
import { Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { toast } from 'react-toastify';

import {
  Container,
  Row,
  PostImage,
  Separator,
  Avatar,
  Column,
  LikeIcon,
  CommentIcon,
  ShareIcon,
  SendIcon,
} from './styles';
import Panel from '../../panel';
import useLocalStorage from 'react-use-localstorage';
import User from '../../../models/User';

function FeedPost (props: {postings: Posting[], setPosts: Dispatch<SetStateAction<Posting[]>>}) {
  const {postings, setPosts} = props;
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


  async function getUsers() {
    await search('/users/all', setUsers, {
      headers: {
        Authorization: token
      }
    })
  }

  let navigate = useNavigate();

  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );

  useEffect(() => {

    if (token == "") {
      toast.warn('Precisa estar logado!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      }); navigate("/login")
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
          <Panel>
            <Container>
              <Row className="heading">
                <Avatar src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Avatar_icon_green.svg/1024px-Avatar_icon_green.svg.png" />
                <Column>
                  <h3>Usuário Green Heart</h3>
                  <h4>{posting.theme?.classification}</h4>
                </Column>
              </Row>
              <Box sx={{ mx: 2.5 }}>
                <Typography variant="body2" gutterBottom>
                  {posting.text}
                </Typography>
              </Box>
              <img
                id="PostImage"
                src={posting.image}
                style={{ width: "100%" }}
              />

              <Row className="likes">
                <span className="circle blue" />
                <span className="circle green" />
                <span className="circle red" />
                <span className="number"></span>
              </Row>

              <Row>
                <Separator />
              </Row>

            </Container>
          </Panel>
        ))
      }
    </>
  );
};

export default FeedPost;
