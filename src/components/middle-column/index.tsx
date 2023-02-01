import React from 'react';

import { Container } from './styles';
import FeedShare from './feedshare/Index';
import FeedPost from './FeedPost';
import Box from '@mui/material/Box';

const MiddleColumn: React.FC = () => {
  return (
    <Container className="middle-column">
        <>
          <FeedShare />
          <FeedPost />
        </>
    </Container>
  );
};

export default MiddleColumn;
