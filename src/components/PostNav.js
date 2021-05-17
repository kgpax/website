import styled from 'styled-components';
import dayjs from 'dayjs';
import { buildOrderedNavigation } from '../site';
import { Link } from '.';

const StyledPostNav = styled.nav``;

const PostNav = (props) => {
  const nav = buildOrderedNavigation();
  return (
    <StyledPostNav {...props}>
      <ul>
        {nav.map((x) => {
          const date = !!x.date ? dayjs(x.date).format('Do MMM YYYY') : 'TBC';
          return (
            <li key={x.path}>
              <Link href={x.path}>
                {date} &rarr; {x.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </StyledPostNav>
  );
};

export default PostNav;
