import React, { MouseEvent } from 'react';
import styles from './Button.module.css';

interface ButtonProps {
  text: string;
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
}

const Button = ({ text, onClick }: ButtonProps) => {
  return (
    <button onClick={onClick} className={styles.Button}>
      {text}
    </button>
  );
};

export default Button;
