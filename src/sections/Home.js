import styled from 'styled-components';
import { Section, Content, Paragraph } from '../components';

const Container = styled(Section)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Title = styled.h1`
  font-size: 6vw;
  color: rgba(0, 0, 0, 0.8);
  font-weight: 400;
  &::before,
  &::after {
    color: rgba(0, 0, 0, 0.2);
  }
  &::before {
    content: '<h1>';
  }
  &::after {
    content: '</h1>';
  }
`;

const SubTitle = styled.h2`
  font-family: 'Clicker Script', cursive;
  font-style: italic;
  font-size: 5vw;
  color: rgba(0, 0, 0, 0.6);
  font-weight: 300;
`;

const pairs = [
  ['#D7F2BA', '#BDE4A8'],
  ['#FFF200', '#FFD300'],
  ['#97D2FB', '#83BCFF'],
  ['#FFBE85', '#FF9B42'],
];

const pickColorPair = () => pairs[Math.floor(Math.random() * pairs.length)];

const Home = () => {
  const [bg1, bg2] = pickColorPair();
  return (
    <Container bg1={bg1} bg2={bg2}>
      <Title>kevinpaxton.com</Title>
      <SubTitle>my little bit of the internet</SubTitle>
      <Content mt={4} align="center">
        <Paragraph>
          Hello, my name is Kevin. After working in software engineering and web
          development for near-on 20 years, I've come to the conclusion that
          it's time I had a website website.
        </Paragraph>
      </Content>
    </Container>
  );
};

export default Home;
