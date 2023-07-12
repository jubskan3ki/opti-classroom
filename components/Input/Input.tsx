import React from 'react';
import styles from './Input.module.css'

function Input({ placeholder }) {
  return <input className={styles.Input} type="text" placeholder={placeholder} />;
}

export default Input;