import * as React from 'react';
import styled from 'styled-components';

const Title = styled.div`
  display: flex;
  justify-content: center;
  color: ${({ theme }) => theme.colors.primary};
`;

const Home = React.memo(function Home() {
  return <Title>the world</Title>;
});

export default Home;
