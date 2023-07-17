import React from 'react';
import styles from './CardSwitch.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import Switch from '../Switch/Switch';
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
		<div className={Etat ? styles.CardSwitch : styles.CardSwitchOff} id={id}>
			<div className={styles.DivSwitch}>
				<p>{Etat ? 'ON' : 'OFF'}</p>
				<Switch id={id} isChecked={Etat} onChange={handlesetEtat} />
			</div>
			<FontAwesomeIcon icon={icon} />
			<p>{Name}</p>
		</div>
	);
}