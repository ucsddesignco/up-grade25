import './Button.scss';

interface ButtonProps {
  text: string;
}

const Button = ({ text }: ButtonProps) => {
  return <button className="cta-button">{text}</button>;
};

export default Button;
