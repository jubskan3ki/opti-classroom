import React, { MouseEvent } from 'react';
import styles from './Button.module.css';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface ButtonProps {
  text: string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  variant?: string;
  icon: IconDefinition;
}

const Button = ({ text, onClick, variant, icon }: ButtonProps) => {
  const buttonClassName = variant ? ` ${styles.Button2}` : styles.Button;

  return (
    <button onClick={onClick} className={buttonClassName}>
      {text}
      {variant ? <FontAwesomeIcon icon={icon} /> : ""}
    </button>
  );
};

export default Button;
