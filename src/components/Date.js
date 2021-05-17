import styled from 'styled-components';

const StyledDate = styled.time`
  display: block;
  text-align: center;
  opacity: 0.7;
  &::before {
    content: '- ';
  }
  &::after {
    content: ' -';
  }
`;

const Date = (props) => <StyledDate {...props} />;

export default Date;
