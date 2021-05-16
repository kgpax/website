import styled from 'styled-components';
import { space } from 'styled-system';
import { pickColorPair } from '../utils/colors';
import { usePageTitle, useScrollToTop } from '../hooks';
import {
  Title,
  Section,
  Content,
  Paragraph,
  Image as I,
  ExternalLink,
  LinkButton,
} from '../components';

const Container = styled(Section)`
  text-align: center;
`;

const StyledTitle = styled(Title)`
  font-family: ${({ theme }) => theme.font.title};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 9vw;
  color: rgba(0, 0, 0, 0.9);
  font-weight: 400;
  ${space}
`;

const Logo = styled(I)`
  display: inline-block;
  height: 1.2em;
  margin-right: ${({ theme }) => theme.space.lg};
`;

const SubTitle = styled.h2`
  font-family: ${({ theme }) => theme.font.cursive};
  font-size: 8vw;
  font-weight: 400;
`;

const Home = () => {
  usePageTitle();
  useScrollToTop();
  const [bg1, bg2] = pickColorPair();
  return (
    <Container py={4} bg1={bg1} bg2={bg2}>
      <StyledTitle>
        <Logo src="logo.png" alt="kevinpaxton.com logo" />
        kevinpaxton.com
      </StyledTitle>
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
