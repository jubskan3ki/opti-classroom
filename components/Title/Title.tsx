import React from 'react';
import styles from './Title.module.css'

interface TitleProps {
  text: string;
}

const Title: React.FC<TitleProps> = ({ text }) => {
  return <div className={styles.ContainerTitle}>
            <h1 className={styles.Title}>{text}</h1>
            <div className={styles.Bottom}/>
        </div>
  ;
};

export default Title;