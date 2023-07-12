import React from 'react';
import styles from './CardSwitch.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

interface CardSwitchProps {
  Etat: boolean;
  handlesetEtat: () => void;
  icon: IconDefinition;
  Name: string;
  id: string;
}

export default function CardSwitch(props: CardSwitchProps) {
  const { Etat, handlesetEtat, icon, Name, id } = props;

  return (
    <div className={styles.CardSwitch} id={id}>
      <div className={styles.DivSwitch}>
        <p>{Etat ? 'ON' : 'OFF'}</p>
        <input
          type="radio"
          name={Name}
          value={Etat ? 'ON' : 'OFF'}
          onChange={handlesetEtat}
          checked={Etat}
        />
      </div>
      <FontAwesomeIcon icon={icon} />
      <p>{Name}</p>
    </div>
  );
}