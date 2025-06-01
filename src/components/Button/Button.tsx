import './Button.scss';
import { Link } from 'react-router';

interface ButtonProps {
  text: string;
  className?: string;
  onClick?: () => void;
  link?: string;
}

const Button = ({ text, className, onClick, link }: ButtonProps) => {
  return (
    <>
      {link ? (
        <Link to={link} className={`cta-button ${className}`}>
          {text}
        </Link>
      ) : (
        <button onClick={onClick} className={`cta-button ${className}`}>
          {text}
        </button>
      )}
    </>
  );
};

export default Button;
