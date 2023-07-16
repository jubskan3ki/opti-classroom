import React from 'react';
import styles from './CardPlanningButton.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear } from '@fortawesome/free-solid-svg-icons';

interface CardPlanningButtonProps {
}

const CardPlanningButton: React.FC<CardPlanningButtonProps> = () => {
  return (
    <div className={styles.Card}>
        <div className={styles.Icon}>
            <FontAwesomeIcon icon={faGear} />
        </div>
    </div>
  );
};

export default CardPlanningButton;
