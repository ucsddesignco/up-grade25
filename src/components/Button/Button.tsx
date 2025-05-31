import './Button.scss';

interface ButtonProps {
  text: string;
  className?: string;
  onClick?: () => void;
}

const Button = ({ text, className, onClick }: ButtonProps) => {
  return <button onClick={onClick} className={`cta-button ${className}`}>{text}</button>;
};

export default Button;
