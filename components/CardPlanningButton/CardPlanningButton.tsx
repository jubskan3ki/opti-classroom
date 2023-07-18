import React from 'react';
import styles from './CardPlanningButton.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear } from '@fortawesome/free-solid-svg-icons';

interface CardPlanningButtonProps {
  onClick?: () => void;
}

const CardPlanningButton: React.FC<CardPlanningButtonProps> = ({ onClick }) => {
  return (
    <div className={styles.Card} onClick={onClick}>
      <div className={styles.Icon}>
        <FontAwesomeIcon icon={faGear} />
      </div>
    </div>
  );
};

export default CardPlanningButton;

