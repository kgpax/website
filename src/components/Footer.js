import styled from 'styled-components';
import dayjs from 'dayjs';

const StyledFooter = styled.footer``;

const Copyright = styled.span`
  font-size: 1.3rem;
`;

const Footer = ({ children, ...props }) => (
  <StyledFooter {...props}>
    {children}
    <Copyright>&copy; {dayjs().format('YYYY')} Kevin Paxton</Copyright>
  </StyledFooter>
);

export default Footer;
