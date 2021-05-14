import styled from 'styled-components';
import { pickColorPair } from '../utils/colors';
import {
  Section,
  Content,
  Paragraph,
  ExternalLink,
  LinkButton,
} from '../components';

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

const Home = () => {
  const [bg1, bg2] = pickColorPair();
  return (
    <Container bg1={bg1} bg2={bg2}>
      <Title>kevinpaxton.com</Title>
      <SubTitle>my little bit of the internet</SubTitle>
      <Content mt={4} align="center">
        <Paragraph>
          Hello, I'm{' '}
          <ExternalLink href="https://twitter.com/kevinpaxton82">
            Kevin
          </ExternalLink>
          . After working in software engineering and web development for
          near-on 20 years, I've come to the conclusion that it's time I had a
          website.
        </Paragraph>
        <Paragraph>
          In an attempt to get the creative juices flowing with what to put on
          this part of the cloud, I figured that I'd document the process of
          getting this site up and built to a level I'm happy with, which will
          be all its own challenge, but more on that later.
        </Paragraph>
        <Paragraph>
          This will be a huge brain dump of the technical and creative thought
          process, and will arrive in stages alongside the general updates to
          the site.
        </Paragraph>
      </Content>
      <Content mt={4} align="center">
        <LinkButton href="/site-build-001">
          Let's get started, shall we? &rarr;
        </LinkButton>
      </Content>
    </Container>
  );
};

export default Home;
