import './Button.scss';
import { Link } from 'react-router';

interface ButtonProps {
  text: string;
  className?: string;
  onClick?: () => void;
  link?: string;
}

const Button = ({ text, className, onClick, link }: ButtonProps) => {
  const isExternalLink = link?.startsWith('http');
  return (
    <>
      {link ? (
        <Link
          to={link}
          target={isExternalLink ? '_blank' : '_self'}
          className={`cta-button ${className}`}
        >
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
