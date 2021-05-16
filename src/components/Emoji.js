import styled from 'styled-components';

const StyledEmoji = styled.span.attrs(({ alt }) => ({
  role: 'img',
  'aria-label': alt,
}))`
  display: inline-block;
  font-size: 2em;
  margin: -1em 0;
  transform: translateY(0.2em);
`;

const Emoji = (props) => <StyledEmoji {...props} />;

export default Emoji;
