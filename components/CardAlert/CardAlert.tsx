import React from 'react';
import styles from './CardAlert.module.css';
import Image from 'next/image' 
import CardTemp from '../../src/Asset/png/CardTemp.png';

interface CardAlertProps {
    Room: string;
    Type: string;
    Resum: string;
    id: string;
}

export default function CardAlert(props: CardAlertProps) {
    
    const { Room, Type, Resum, id } = props;
    
    return (
        <div className={styles.CardAlert} id={id}>
            <Image src={CardTemp} alt='CardTemp'/>
            <div className={styles.CardAlertContent}>
                <div className={styles.CardAlertType}>
                    <small>{Type}</small>
                </div>    
                <div className={styles.CardAlertResum}>
                    <h4>{Room}</h4>
                    <p>{Resum}</p>
                </div>
            </div>
        </div>
    );
}