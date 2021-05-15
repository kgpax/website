import styled from 'styled-components';
import { Link } from '.';

const StyledPrevNextNav = styled.nav`
  & ul {
    list-style-type: none;
    margin: 0;
    padding: ${({ theme }) => theme.space[2]};
  }
  & li {
    display: inline-block;
    margin: 0;
    padding: 0 ${({ theme }) => theme.space[2]};

    & + li {
      border-left: 1px solid rgba(0, 0, 0, 0.3);
    }
  }
`;

const PrevNextNav = ({ prev, next, props }) => {
  if (!prev && !next) return null;
  return (
    <StyledPrevNextNav {...props}>
      <ul>
        {prev &&
          prev().map((page) => (
            <li key="prev">
              &larr;{' '}
              <Link href={page.path}>{page.shortTitle || page.title}</Link>
            </li>
          ))}
        {next &&
          next().map((page) => (
            <li key="next">
              <Link href={page.path}>{page.shortTitle || page.title}</Link>{' '}
              &rarr;
            </li>
          ))}
      </ul>
    </StyledPrevNextNav>
  );
};

export default PrevNextNav;
