import styled from 'styled-components';
import { pickColorPair } from '../utils/colors';
import Header from './Header';
import Link from './Link';
import Section from './Section';
import Content from './Content';
import Title from './Title';
import Paragraph from './Paragraph';
import Footer from './Footer';

const TopHeader = styled(Header)`
  flex: 0 0 auto;
  text-align: center;
  padding: ${({ theme }) => theme.space[4]};
  color: rgba(0, 0, 0, 0.5);
`;
const FullContent = styled(Content)`
  flex: 1 1 auto;
`;
const BottomFooter = styled(Footer)`
  flex: 0 0 auto;
  text-align: center;
  padding: ${({ theme }) => theme.space[4]};
  color: rgba(0, 0, 0, 0.5);
`;

const Page = ({ title, children }) => {
  const [bg1, bg2] = pickColorPair();
  return (
    <Section bg1={bg1} bg2={bg2}>
      <TopHeader>
        &larr; <Link href="/">kevinpaxton.com</Link>
      </TopHeader>
      <FullContent>
        {title && <Title>{title}</Title>}
        {children}
      </FullContent>
      <BottomFooter>
        <Paragraph>
          &larr; <Link href="/">back</Link>
        </Paragraph>
        &copy; Kevin Paxton
      </BottomFooter>
    </Section>
  );
};

export default Page;
