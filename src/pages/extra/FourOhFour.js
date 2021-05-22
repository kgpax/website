import styled from 'styled-components';
import { usePageTitle, useScrollToTop } from '../../hooks';
import Background from '../../components/Background';
import { Section, Heading, Link } from '../../components';

const Container = styled(Section)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  color: rgba(0, 0, 0, 0.6);
`;

const BigText = styled.h2`
  font-size: 25vw;
  font-weight: 900;
`;

const Home = () => {
  usePageTitle('404');
  useScrollToTop();
  return (
    <Background>
      <Container>
        <BigText>404</BigText>
        <Heading>This page does not exist</Heading>
        <Link href="/">&uarr; Come on, let's get you home...</Link>
      </Container>
    </Background>
  );
};

export default Home;
