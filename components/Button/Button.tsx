import React, { MouseEvent } from 'react';
import styles from './Button.module.css';

interface ButtonProps {
  text: string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  variant?: string;
}

const Button = ({ text, onClick, variant }: ButtonProps) => {
  const buttonClassName = variant ? `${styles.Button} ${styles.Button2}` : styles.Button;

  return (
    <button onClick={onClick} className={buttonClassName}>
      {text}
    </button>
  );
};

export default Button;
