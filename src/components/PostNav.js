import styled from 'styled-components';
import dayjs from 'dayjs';
import { getBlogPosts } from '@utils/site';
import { Link } from '@components';

const StyledPostNav = styled.nav`
  & > ul {
    margin: 0;
    padding: 0;
  }
`;

const Post = styled.li`
  list-style-type: none;
  padding: ${({ theme }) => theme.space.lg};
  background: rgba(0, 0, 0, 0.05);
  border-radius: 1rem;
  transition: transform 0.05s ease-in;

  &:hover {
    transform: scale(1.05);
  }
`;

const PostTitle = styled.span`
  font-weight: bold;
  display: block;
`;
const PostDate = styled.span`
  display: block;
  font-size: ${({ theme }) => theme.fontSize.sm};
`;

const PostNav = props => {
  const nav = getBlogPosts();
  return (
    <StyledPostNav {...props}>
      <ul>
        {nav.map(x => {
          const date = !!x.date ? dayjs(x.date).format('Do MMM YYYY') : 'TBC';
          return (
            <Post key={x.path}>
              <Link href={x.path} underline="none">
                <PostTitle>{x.title}</PostTitle>
                <PostDate>{date}</PostDate>
              </Link>
            </Post>
          );
        })}
      </ul>
    </StyledPostNav>
  );
};

export default PostNav;
