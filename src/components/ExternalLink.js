import styled from 'styled-components';

const StyledExternalLink = styled.a.attrs({
  rel: 'nofollow noopener noreferrer',
  target: '_blank',
})`
  color: inherit;
`;

const ExternalLink = (props) => <StyledExternalLink {...props} />;

export default ExternalLink;
