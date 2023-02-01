import React from 'react';
import GroupsIcon from '@mui/icons-material/Groups';
import PersonIcon from '@mui/icons-material/Person';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { addToken } from '../../store/tokens/actions';
import { useDispatch } from 'react-redux';
import useLocalStorage from 'react-use-localstorage';


import { Container, ProfileCircle, SearchInput, MessageIcon } from './styles';
import { Typography } from '@mui/material';

const MobileHeader: React.FC = () => {

  const dispatch = useDispatch();
  let navigate = useNavigate();
  const [username, setUsername] = useLocalStorage('username');

  function goAbout() {
    navigate('/about');
  }

  function goLogout() {
    setUsername('');
    dispatch(addToken(''));
    toast.success('Usuário deslogado!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
    navigate('/login');
  }

  return (
    <Container>
        <GroupsIcon onClick={goAbout} />
      <h1 style={{ color: "white" }}>Green Heart</h1>
        <PersonIcon onClick={goLogout}/>
    </Container>
  );
};

export default MobileHeader;
