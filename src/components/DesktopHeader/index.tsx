import React from 'react';
import PersonIcon from '@mui/icons-material/Person';
import GroupsIcon from '@mui/icons-material/Groups';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


import {
  Container,
  Wrapper,
  LinkedInIcon,
  SearchInput,
  HomeIcon,
  NotificationsIcon,
  ProfileCircle,
  CaretDownIcon,
} from './styles';
import { addToken } from '../../store/tokens/actions';
import { useDispatch } from 'react-redux';
import useLocalStorage from 'react-use-localstorage';

const Header: React.FC = () => {

  const dispatch = useDispatch();
  let navigate = useNavigate();
  const [username, setUsername] = useLocalStorage('username');

  function goAbout() {
    navigate('/about');
  }

  function goHome() {
    navigate('/home')
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
      <Wrapper>
        <div className="left">
          <img src="https://cdn.discordapp.com/attachments/1049282802560008232/1070143496616431716/logo_3.png" width={50} style={{ marginRight: "10px" }} />
          <h1 style={{ color: "white" }}>Green Heart</h1>
        </div>

        <div className="right">
          <nav>
            <button onClick={goHome}>
              <HomeIcon />
              <span>Início</span>
            </button>
            <button onClick={goAbout}>
              <GroupsIcon />
              <span>Sobre nós</span>
            </button>
            <button onClick={goLogout}>
              <PersonIcon />
              <span>
                Sair
              </span>
            </button>
          </nav>
        </div>
      </Wrapper>
    </Container>
  );
};

export default Header;
