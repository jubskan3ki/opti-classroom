import React from 'react';
import styles from './CardPlanning.module.css';

interface CardPlanningProps {
  textBlack: string;
  textBlue: string;
}

const CardPlanning: React.FC<CardPlanningProps> = ({ textBlack, textBlue}) => {
  return (
    <div className={styles.Card}>
      <p className={styles.TextUp}>{textBlack}</p>
      <p className={styles.TextDown}>{textBlue}</p>
    </div>
  );
};

export default CardPlanning