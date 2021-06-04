import * as React from 'react';
import styled from 'styled-components';
import Users from './Users';

const Title = styled.div`
  display: flex;
  justify-content: center;
  color: ${({ theme }) => theme.colors.primary};
`;

const Home = React.memo(function Home() {
  return (
    <div>
      <Title>the world</Title>
      <Users />
    </div>
  );
});

export default Home;
