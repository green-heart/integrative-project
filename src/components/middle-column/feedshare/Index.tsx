import React, { Dispatch, SetStateAction } from 'react';

import {
  Container,
  WriteIcon,
  CameraIcon,
  VideoCameraIcon,
  DocumentIcon,
  ArticleIcon,
} from './Styles';
import Panel from '../../panel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import NewPosting from '../../post/newPosting/NewPosting';
import Posting from '../../../models/Posting';

function FeedShare (props: {postings: Posting[], setPosts: Dispatch<SetStateAction<Posting[]>>}) {

  const style = {
    position: 'absolute' as 'absolute',
    top: '40%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Panel>
      <Container>
        <div className="write">
          <Button onClick={handleOpen} fullWidth id="post" startIcon={<WriteIcon />}>
            Começe uma postagem
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>               
                  <NewPosting postings={props.postings} setPosts={props.setPosts} />
              </Box>
            </Modal>
          </Button>
        </div>
        <div className="attachment">
          <button onClick={handleOpen}>
            <CameraIcon />
            Foto
          </button>
          <button onClick={handleOpen}>
            <VideoCameraIcon />
            Video
          </button>
          <button onClick={handleOpen}>
            <DocumentIcon />
            Documento
          </button>
          <button onClick={handleOpen}>
            <ArticleIcon />
            Escrever artigo
          </button>
        </div>
      </Container>
    </Panel>
  );
};

export default FeedShare;
