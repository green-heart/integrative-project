import React from 'react';

import ProfilePanel from './ProfilePanel';

import { Container } from './styles';

const LeftColumn: React.FC = () => {
  return (
    <Container className="left-column">
        <>
          <ProfilePanel />
        </>
    </Container>
  );
};

export default LeftColumn;
