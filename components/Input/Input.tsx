import React from 'react';
import styles from './Input.module.css';

interface InputProps {
  placeholder: string;
}

function Input({ placeholder }: InputProps) {
  return <input className={styles.Input} type="text" placeholder={placeholder} />;
}

export default Input;
