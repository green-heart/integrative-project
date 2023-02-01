import React, { useState } from 'react';

import { Container } from './styles';
import FeedShare from './feedshare/Index';
import FeedPost from './FeedPost';
import Box from '@mui/material/Box';
import Posting from '../../models/Posting';

const MiddleColumn: React.FC = () => {
  const [postings, setPosts] = useState<Posting[]>([])

  return (
    <Container className="middle-column">
        <>
          <FeedShare postings={postings} setPosts={setPosts} />
          <FeedPost postings={postings} setPosts={setPosts} />
        </>
    </Container>
  );
};

export default MiddleColumn;
