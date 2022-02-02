import Head from 'next/head';
import styled from 'styled-components';
import dayjs from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';
import {
  Background,
  Header,
  Content,
  Title,
  Date,
  Section,
  Link,
  PrevNextNav,
  Footer,
} from '@components';

dayjs.extend(advancedFormat);

const TopHeader = styled(Header)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-family: ${({ theme }) => theme.font.title};
  flex: 0 0 auto;
  text-align: center;
  padding-bottom: ${({ theme }) => theme.space.xl};
  color: rgba(0, 0, 0, 0.5);
`;
const FullContent = styled(Content)`
  flex: 1 1 auto;
`;
const BottomFooter = styled(Footer)`
  flex: 0 0 auto;
  text-align: center;
  padding-top: ${({ theme }) => theme.space.xl};
  color: rgba(0, 0, 0, 0.5);
`;

const Page = ({ title, date, prev, next, children }) => (
  <>
    <Head>
      <title>kevinpaxton.com{(title && ` - ${title}`) || ''}</title>
    </Head>
    <Background>
      <Section>
        <TopHeader>
          &uarr;
          <Link href="/">kevinpaxton.com</Link>
        </TopHeader>
        <FullContent>
          {title && <Title>{title}</Title>}
          {(date && (
            <Date dateTime={date}>{dayjs(date).format('Do MMM YYYY')}</Date>
          )) || <Date>Publish date TBC</Date>}
          {children}
        </FullContent>
        <BottomFooter>
          <PrevNextNav prev={prev} next={next} />
        </BottomFooter>
      </Section>
    </Background>
  </>
);

export default Page;
