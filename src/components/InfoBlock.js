import styled from 'styled-components';
import PropTypes from 'prop-types';
import Image from '@components/Image';
import Paragraph from '@components/Paragraph';

const StyledInfoBlock = styled(Paragraph)`
  display: flex;
  flex-direction: row;
  align-items: start;
  padding: ${({ theme }) => theme.space.lg};
  background: rgba(0, 0, 0, 0.05);
  border-radius: 1rem;

  & img,
  svg {
    width: ${({ size }) => size};
    flex: 0 0 ${({ size }) => size};
    padding-top: ${({ theme }) => theme.space.sm};
    padding-right: ${({ theme }) => theme.space.lg};
  }

  & span {
    flex: 1 1 auto;
  }
`;

const InfoBlock = ({ icon, iconComponent, iconAlt, children, ...props }) => (
  <StyledInfoBlock {...props}>
    {icon && <Image src={icon} alt={iconAlt} />}
    {iconComponent}
    <span>{children}</span>
  </StyledInfoBlock>
);
InfoBlock.propTypes = {
  icon: PropTypes.string,
  iconComponent: PropTypes.element,
  iconAlt: PropTypes.string,
  size: PropTypes.string.isRequired,
};
InfoBlock.defaultProps = {
  size: '8rem',
};

export default InfoBlock;
