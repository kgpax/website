import styled from 'styled-components';
import { space } from 'styled-system';
import { usePageTitle, useScrollToTop } from '../hooks';
import Background from '../components/Background';
import {
  Title,
  Section,
  Content,
  Paragraph,
  InfoBlock,
  PostNav,
  Footer,
  Image as I,
  ExternalLink as EL,
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
  return (
    <Background>
      <Container py={4}>
        <StyledTitle>
          <Logo src="logo.svg" alt="kevinpaxton.com logo" />
          kevinpaxton.com
        </StyledTitle>
        <SubTitle>my little bit of the internet</SubTitle>
        <Content mt={4}>
          <InfoBlock icon="wave.svg" iconAlt="Waving hand">
            Hello, I'm <EL href="https://twitter.com/kevinpaxton82">Kevin</EL>.
            After working in software engineering and web development for
            near-on 20 years, I've come to the conclusion that it's time I had a
            website.
          </InfoBlock>
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
          <PostNav />
        </Content>
        <Footer />
      </Container>
    </Background>
  );
};

export default Home;
