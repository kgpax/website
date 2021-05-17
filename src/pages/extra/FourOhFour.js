import styled from 'styled-components';
import { pickColorPair } from '../../utils/colors';
import { usePageTitle, useScrollToTop } from '../../hooks';
import { LinkButton, Section } from '../../components';

const Container = styled(Section)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  color: rgba(0, 0, 0, 0.6);
`;

const BigText = styled.h2`
  font-size: 45vw;
  font-weight: 900;
`;

const Home = () => {
  usePageTitle('404');
  useScrollToTop();
  const [bg1, bg2] = pickColorPair();
  return (
    <Container py={4} bg1={bg1} bg2={bg2}>
      <BigText>404</BigText>
      <LinkButton href="/">&uarr; Come on, let's get you home...</LinkButton>
    </Container>
  );
};

export default Home;
