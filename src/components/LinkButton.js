import Button from './Button';
import { Link } from 'wouter';

const LinkButton = (props) => <Button as={Link} {...props} />;

export default LinkButton;
