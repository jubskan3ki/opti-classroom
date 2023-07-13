import React from 'react';
import styles from './Button.module.css'


function Button({ text, onClick }) {
  return <button onClick={onClick} className={styles.Button}>{text}</button>;
}

export default Button;