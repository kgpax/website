import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Image, Paragraph } from '.';

const StyledInfoBlock = styled(Paragraph)`
  display: flex;
  flex-direction: row;
  align-items: start;
  padding: ${({ theme }) => theme.space[3]};
  background: rgba(0, 0, 0, 0.05);
  border-radius: 1rem;

  & img {
    flex: 0 0 ${({ size }) => size};
    padding-top: ${({ theme }) => theme.space[1]};
    padding-right: ${({ theme }) => theme.space[3]};
  }

  & span {
    flex: 1 1 auto;
  }
`;

const InfoBlock = ({ icon, iconAlt, children, ...props }) => (
  <StyledInfoBlock {...props}>
    {icon && <Image src={icon} alt={iconAlt} />}
    <span>{children}</span>
  </StyledInfoBlock>
);
InfoBlock.propTypes = {
  icon: PropTypes.string,
  iconAlt: PropTypes.string,
  size: PropTypes.string.isRequired,
};
InfoBlock.defaultProps = {
  size: '8rem',
};

export default InfoBlock;
