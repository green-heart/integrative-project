import React, { useEffect, useState } from 'react';


import { Container } from './styles';
import Panel from '../../panel';
import SignIn from '../../../models/SignIn';
import User from '../../../models/User';
import Typography from '@mui/material/Typography'
import { search } from '../../../services/Service';
import useLocalStorage from 'react-use-localstorage';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { useSelector } from 'react-redux';

const ProfilePanel: React.FC = () => {

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
  }, [username  ])

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

  return (
    <Panel>
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
        <h2>Membro Green Heart</h2>
      </Container>
    </Panel>
  );
};

export default ProfilePanel;
