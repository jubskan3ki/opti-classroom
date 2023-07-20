import React from 'react';
import styles from './CardPlanningButton.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear } from '@fortawesome/free-solid-svg-icons';

interface CardPlanningButtonProps extends React.HTMLAttributes<HTMLDivElement> {
  onClick?: () => void;
}

const CardPlanningButton: React.FC<CardPlanningButtonProps> = ({ onClick, ...props }) => {
  return (
    <div className={styles.Card} onClick={onClick} {...props}>
      <div className={styles.Icon}>
        <FontAwesomeIcon icon={faGear} />
      </div>
    </div>
  );
};

export default CardPlanningButton;