import styled from 'styled-components';
import { Link } from '@components';
import { getPage } from '@utils/site';

const StyledPrevNextNav = styled.nav`
  & ul {
    list-style-type: none;
    margin: 0;
    padding: ${({ theme }) => theme.space.md};
  }
  & li {
    display: inline-block;
    margin: 0;
    padding: 0 ${({ theme }) => theme.space.md};

    & + li {
      border-left: 1px solid rgba(0, 0, 0, 0.3);
    }
  }
`;

const PrevNextNav = ({ prev, next, props }) => {
  if (!prev && !next) return null;
  const prevPage = getPage(prev);
  const nextPage = getPage(next);
  return (
    <StyledPrevNextNav {...props}>
      <ul>
        {prevPage && (
          <li key="prev">
            &larr;{' '}
            <Link href={prevPage.path}>
              {prevPage.shortTitle || prevPage.title}
            </Link>
          </li>
        )}
        {nextPage && (
          <li key="next">
            <Link href={nextPage.path}>
              {nextPage.shortTitle || nextPage.title}
            </Link>{' '}
            &rarr;
          </li>
        )}
      </ul>
    </StyledPrevNextNav>
  );
};

export default PrevNextNav;
