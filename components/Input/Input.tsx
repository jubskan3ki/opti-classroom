import React from 'react';
import styles from './Input.module.css';

interface InputProps {
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: 'text' | 'password' | 'number'; // Ajoutez cette ligne
}

function Input({ placeholder, value, onChange , type = 'text'}: InputProps) {
  return <input className={styles.Input} type={type} placeholder={placeholder} value={value} onChange={onChange} />;
}

export default Input;
