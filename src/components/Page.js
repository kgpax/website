import styled from 'styled-components';
import { Link } from 'wouter';
import { pickColorPair } from '../utils/colors';
import Header from './Header';
import Section from './Section';
import Content from './Content';
import Title from './Title';
import Footer from './Footer';

const TopHeader = styled(Header)`
  flex: 0 0 auto;
  text-align: center;
  padding: ${({ theme }) => theme.space[3]};
`;
const FullContent = styled(Content)`
  flex: 1 1 auto;
`;
const BottomFooter = styled(Footer)`
  flex: 0 0 auto;
  text-align: center;
  padding: ${({ theme }) => theme.space[3]};
`;

const Page = ({ title, children }) => {
  const [bg1, bg2] = pickColorPair();
  return (
    <Section bg1={bg1} bg2={bg2}>
      <TopHeader>
        <Link href="/">kevinpaxton.com</Link>
      </TopHeader>
      <FullContent>
        {title && <Title>{title}</Title>}
        {children}
      </FullContent>
      <BottomFooter>&copy; Kevin Paxton</BottomFooter>
    </Section>
  );
};

export default Page;
